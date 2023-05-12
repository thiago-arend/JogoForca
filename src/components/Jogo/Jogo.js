import './Jogo.css';


export default function Jogo(props) {
    const {alfabeto, setPalavraSorteada, palavraSorteada, letrasHabilitadas,
         indiceImagem, imagensForca, listaPalavras, setLetrasHabilitadas} = props;

    function sorteiaPalavra() {
        const min = 0;
        const max = 187;
        const indice = Math.floor(Math.random() * (max - min + 1) + min);

        return listaPalavras[indice];
    }

    function processaPalavra() {
        // habilita letras
        setLetrasHabilitadas(alfabeto);
        // sorteia palavra e salva estado
        const pSorteada = sorteiaPalavra();
        setPalavraSorteada(pSorteada);
    }

    return (
        <div className="jogo">
            <img src={ imagensForca[indiceImagem] } />
            <div>
                <button onClick={ processaPalavra }>Escolher Palavra</button>
                <ul className="palavra">
                    {palavraSorteada.split("").map((l, i) => <li key={i} className="underline">
                        {(!letrasHabilitadas.includes(l)) ? l : "_"}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}