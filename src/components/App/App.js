import './App.css';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';
import { useState } from 'react';

import listaPalavras from '../../palavras.js';
import forca0 from '../../assets/forca0.png';
import forca1 from '../../assets/forca1.png';
import forca2 from '../../assets/forca2.png';
import forca3 from '../../assets/forca3.png';
import forca4 from '../../assets/forca4.png';
import forca5 from '../../assets/forca5.png';
import forca6 from '../../assets/forca6.png';

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];
    const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [letrasHabilitadas, setLetrasHabilitadas] = useState([]); // o vetor de letras habilitadas começa vazio
    const [totalErros, setTotalErros] = useState(0);
    const [indiceImagem, setIndiceImagem] = useState(0);
    const [palavraSorteada, setPalavraSorteada] = useState("");

    return (
        <div className="container">
            <Jogo imagensForca = {imagensForca} totalErros = {totalErros} alfabeto = {alfabeto} palavraSorteada = {palavraSorteada} letrasHabilitadas = {letrasHabilitadas}
                setPalavraSorteada = {setPalavraSorteada} indiceImagem = {indiceImagem}
                listaPalavras = {listaPalavras} setLetrasHabilitadas = {setLetrasHabilitadas}/>
            <Letras totalErros = {totalErros} setTotalErros = {setTotalErros} alfabeto = {alfabeto} letrasHabilitadas = {letrasHabilitadas} 
                setLetrasHabilitadas = {setLetrasHabilitadas} palavraSorteada = {palavraSorteada} setIndiceImagem = {setIndiceImagem}/>
        </div>
    )
}