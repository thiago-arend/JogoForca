import './Jogo.css';


export default function Jogo(props) {
    const {setPalavraSorteada, palavraSorteada, setHabilitado,
         imagemForca, listaPalavras} = props;

    function sorteiaPalavra() {
        const min = 0;
        const max = 187;
        const indice = Math.floor(Math.random() * (max - min + 1) + min);

        return listaPalavras[indice];
    }

    function processaPalavra() {
        // habilita letras
        setHabilitado(true);
        // sorteia palavra e salva estado
        const pSorteada = sorteiaPalavra();
        setPalavraSorteada(pSorteada);
        console.log(pSorteada);
    }

    return (
        <div className="jogo">
            <img src={ imagemForca } />
            <div>
                <button onClick={ processaPalavra }>Escolher Palavra</button>
                <ul className="palavra">
                    {palavraSorteada.split("").map((l, i) => <li key={i} className="underline">_</li>)}
                </ul>
            </div>
        </div>
    )
}