import "./Letras.css";

export default function Letras(props) {
    const {palavraSorteada, setIndiceImagem, totalErros, setTotalErros, letrasHabilitadas, setLetrasHabilitadas, alfabeto} = props;

    function processaLetra(letra) {
        letrasHabilitadas.splice(letrasHabilitadas.indexOf(letra), 1); // remove a letra do array in place
        setLetrasHabilitadas([...letrasHabilitadas]); // atualiza a mudança na variavel de estado

        if (!palavraSorteada.split("").includes(letra)) { // se errou a letra
            setTotalErros(totalErros + 1);
            setIndiceImagem(totalErros + 1);
        }
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((l) => <button key={l} disabled={(!letrasHabilitadas.includes(l)) ? "disabled": ""}
                 className={`letra-alfabeto ${(!letrasHabilitadas.includes(l)) ? "usada": ""}`}
                   onClick={() => processaLetra(l)}> {l.toUpperCase()} </button>)}
        </div>
    )
}