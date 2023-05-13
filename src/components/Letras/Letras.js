import "./Letras.css";

export default function Letras(props) {
    const {setFimJogo, setVitoria, palavraSorteada, setIndiceImagem,
         totalErros, setTotalErros, letrasDesabilitadas, setLetrasDesabilitadas,
         alfabeto} = props;

    function verificaAdivinhouPalavra(letras) {
        let numLetras = 0;
        palavraSorteada.split("").forEach(l => {
            if (letras.includes(l)) numLetras++;
        });

        if (numLetras === palavraSorteada.length) return true;
        return false;
    }

    function processaLetra(letra) {
        const letrasDesabilitadasAtualizadas = [...letrasDesabilitadas, letra];
        setLetrasDesabilitadas(letrasDesabilitadasAtualizadas); // atualiza a mudança na variavel de estado

        let qtdErros = totalErros;
        const adivinhou = verificaAdivinhouPalavra(letrasDesabilitadasAtualizadas);
        if (!palavraSorteada.split("").includes(letra)) { // se errou a letra
            qtdErros++;
            setTotalErros(qtdErros);
            setIndiceImagem(qtdErros);
        }

        if (qtdErros < 6 && adivinhou){ // vitoria
            // desabilita letras
            setLetrasDesabilitadas(alfabeto);
            setFimJogo(true);
            setVitoria(true);
        }
        if (qtdErros === 6 && !adivinhou){ // derrota
            // desabilita letras
            setLetrasDesabilitadas(alfabeto);
            setFimJogo(true);
            setVitoria(false);
        }
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((l) => <button key={l} disabled={(letrasDesabilitadas.includes(l)) ? "disabled": ""}
                 className={`letra-alfabeto ${(letrasDesabilitadas.includes(l)) ? "usada": ""}`}
                 onClick={() => processaLetra(l)}> {l.toUpperCase()} </button>)}
        </div>
    )
}