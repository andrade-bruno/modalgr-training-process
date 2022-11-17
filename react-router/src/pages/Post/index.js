import { Route, Routes, useParams } from "react-router-dom"

import './post.css'
import posts from 'assets/json/posts.json'
import PostModel from "components/PostModel"
import ReactMarkdown from "react-markdown"
import NotFound from "pages/NotFound"
import DefaultPage from "components/DefaultPage"

import PostCard from 'components/PostCard';

export default function Post() {
    const params = useParams()

    const currentPost = posts.find((post) => {
        return post.id === Number(params.id)
    })

    const relatedPosts = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)
    // Picks last 4 posts (recent), not including current post

    console.log(relatedPosts)

    if (!currentPost) {
        return (
            <NotFound />
        )
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <>
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

                        <h1 className="related-posts-title">Outros posts que você pode gostar</h1>

                        <div className='related-posts'>

                            {relatedPosts.map((post) => (
                                <PostCard post={post} key={post.id} />
                            ))}
                        </div>
                    </>
                } />
            </Route>
        </Routes>
    )
}