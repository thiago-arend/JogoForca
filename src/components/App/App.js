import './App.css';
import '../../palavras.js';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';

export default function App() {
    return (
        <div className="container">
            <Jogo />
            <Letras />
        </div>
    )
}