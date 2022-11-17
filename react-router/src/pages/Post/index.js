import { Route, Routes, useParams } from "react-router-dom"

import './post.css'
import posts from 'assets/json/posts.json'
import PostModel from "components/PostModel"
import ReactMarkdown from "react-markdown"
import NotFound from "pages/NotFound"
import DefaultPage from "components/DefaultPage"

export default function Post() {
    const params = useParams()

    const currentPost = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!currentPost) {
        return (
            <NotFound />
        )
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <PostModel
                        coverPhoto={require(`../../assets/posts/${currentPost.id}/cover.png`)}
                        title={currentPost.title}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {currentPost.content}
                            </ReactMarkdown>
                        </div>
                    </PostModel>
                } />
            </Route>
        </Routes>
    )
}