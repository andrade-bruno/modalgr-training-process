import PostModel from "components/PostModel";
import coverPhoto from 'assets/about-me-header.png'

export default function About() {
    return (
        <PostModel
            coverPhoto={coverPhoto}
            title='Sobre Mim'
        >
            Conteudo...
        </PostModel>
    )
}