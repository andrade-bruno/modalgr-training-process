import PostModel from "components/PostModel";
import coverPhoto from 'assets/about-me-header.png'
import styles from './about.module.css'
import brunoImg from 'assets/bruno.jpeg'

export default function About() {
    return (
        <PostModel
            coverPhoto={coverPhoto}
            title='Sobre'
        >
            <h3 className={styles.subtitle}>
                Vai um cafézinho?
            </h3>

            <img
                src={brunoImg}
                className={styles.photo}
                alt='Bruno'
            />

            <p className={styles.paragraph}>
                Olá, tudo bem? Trabalho como desenvolvedor web há cerca de 5 anos
            </p>

            <p className={styles.paragraph}>
                Minha carreira na área de programação começou no mesmo ano em que iniciei a graduação em Ciência da Computação, na Universidade Paulista em Santos - SP.
            </p>

            <p className={styles.paragraph}>
                Venho atuando nesses anos com as ferramentas em alta no mercado de TI, como o SQL Server, MongoDB, Javascript, Typescript, Microsoft .NET e frameworks como o React, React Native, Tailwind CSS, Styled Components, Jquery e SASS.
            </p>

            <p className={styles.paragraph}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Hoje sou muito feliz de ter a oportunidade de trazer esses conhecimentos e ter o reconhecimento profissional na área.
            </p>
        </PostModel>
    )
}