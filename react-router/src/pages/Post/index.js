import { useParams } from "react-router-dom"

export default function Post() {
    const params = useParams()
    console.log(params.id)

    return (
        <div>
            Post...
        </div>
    )
}