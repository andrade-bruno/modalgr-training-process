import Banner from './components/Banner';
import Input from './components/Input';
import './main.css';

function App() {
    return (
        <>
            <Banner />
            <Input name='Nome' type='text' placeholder='Digite seu nome' />
            <Input name='Cargo' type='text' placeholder='Digite seu cargo' />
            <Input
                name='Imagem'
                type='text'
                placeholder='Informe o endereço de imagem'
            />
        </>
    );
}

export default App;
