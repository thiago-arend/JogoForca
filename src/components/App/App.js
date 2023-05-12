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
    const [habilitado, setHabilitado] = useState(false);
    const [totalErros, setTotalErros] = useState(0);
    const [imagemForca, setImagemForca] = useState(forca0);
    const [palavraSorteada, setPalavraSorteada] = useState("");

    return (
        <div className="container">
            <Jogo palavraSorteada = {palavraSorteada} setPalavraSorteada = {setPalavraSorteada} 
                setHabilitado = {setHabilitado} imagemForca = {imagemForca} listaPalavras = {listaPalavras}/>
            <Letras habilitado = {habilitado} setHabilitado = {setHabilitado}/>
        </div>
    )
}