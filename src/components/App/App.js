import './App.css';
import Jogo from '../Jogo/Jogo.js';
import Letras from '../Letras/Letras.js';
import { useState } from 'react';
import listaPalavras from '../../palavras.js';

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

    const [letrasDesabilitadas, setLetrasDesabilitadas] = useState(alfabeto); // o vetor de letras habilitadas começa com todas
    const [totalErros, setTotalErros] = useState(0);
    const [indiceImagem, setIndiceImagem] = useState(0);
    const [palavraSorteada, setPalavraSorteada] = useState("");
    const [vitoria, setVitoria] = useState(false);
    const [fimJogo, setFimJogo] = useState(false);
    const [jogoEmProgresso, setJogoEmProgresso] = useState(false);

    console.log(palavraSorteada);
    // console.log('fimjogo', fimJogo);
    // console.log('vitoria', vitoria);

    function resetEstado(pSorteada) {
        setLetrasDesabilitadas([]);
        setTotalErros(0);
        setIndiceImagem(0);
        setPalavraSorteada(pSorteada);
        setVitoria(false);
        setFimJogo(false);
    }

    return (
        <div className="container">
            <Jogo resetEstado = {resetEstado} fimJogo = {fimJogo} vitoria = {vitoria} 
                  palavraSorteada = {palavraSorteada} letrasDesabilitadas = {letrasDesabilitadas}
                  jogoEmProgresso = {jogoEmProgresso} indiceImagem = {indiceImagem} 
                  setJogoEmProgresso = {setJogoEmProgresso} listaPalavras = {listaPalavras} />
            <Letras setFimJogo = {setFimJogo} setVitoria = {setVitoria} totalErros = {totalErros}
                    setTotalErros = {setTotalErros} alfabeto = {alfabeto} 
                    letrasDesabilitadas = {letrasDesabilitadas} 
                    setLetrasDesabilitadas = {setLetrasDesabilitadas} palavraSorteada = {palavraSorteada}
                    setJogoEmProgresso = {setJogoEmProgresso} setIndiceImagem = {setIndiceImagem}/>
        </div>
    )
}