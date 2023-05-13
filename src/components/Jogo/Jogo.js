import './Jogo.css';
import forca0 from '../../assets/forca0.png';
import forca1 from '../../assets/forca1.png';
import forca2 from '../../assets/forca2.png';
import forca3 from '../../assets/forca3.png';
import forca4 from '../../assets/forca4.png';
import forca5 from '../../assets/forca5.png';
import forca6 from '../../assets/forca6.png';


export default function Jogo(props) {
    const {fimJogo, vitoria, palavraSorteada, letrasDesabilitadas,
        setChuteHabilitado, indiceImagem, listaPalavras, resetEstado} = props;

    const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function iniciaJogo() {
        resetEstado(sorteiaPalavra());
        setChuteHabilitado(true);
    }

    function sorteiaPalavra() {
        const min = 0;
        const max = 187;
        const indice = Math.floor(Math.random() * (max - min + 1) + min);

        return listaPalavras[indice];
    }

    return (
        <div className="jogo">
            <img src={ imagensForca[indiceImagem] } />
            <div>
                <button onClick={ iniciaJogo }>Escolher Palavra</button>
                <ul className="palavra">
                    {palavraSorteada.split("").map((l, i) => <li key={i}
                        className={`underline
                        ${ ((fimJogo && vitoria) ? "vitoria" : "") }
                        ${ ((fimJogo && !vitoria) ? "derrota" : "") }`}>
                        {(letrasDesabilitadas.includes(l)) ? l : "_"}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}