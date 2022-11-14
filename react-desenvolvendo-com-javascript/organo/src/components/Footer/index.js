import './index.css';

export default function Footer(props) {
    return (
        <footer>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/assets/fb.png' alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/assets/tw.png' alt='Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/assets/ig.png' alt='Instagram' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/assets/logo.png' alt='Organo' />
            </section>
            <section>
                <p>Desenvolvido por ModalGR</p>
            </section>
        </footer>
    );
}
