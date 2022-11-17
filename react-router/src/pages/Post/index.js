import { useParams } from "react-router-dom"
import posts from 'assets/json/posts.json'
import PostModel from "components/PostModel"
import ReactMarkdown from "react-markdown"

export default function Post() {
    const params = useParams()

    const currentPost = posts.find((post) => {
        return post.id === Number(params.id)
    })

    return (
        <PostModel
            coverPhoto={require(`../../assets/posts/${currentPost.id}/cover.png`)}
            title={currentPost.title}
        >
            <ReactMarkdown>
                {currentPost.content}
            </ReactMarkdown>
        </PostModel>
    )
}