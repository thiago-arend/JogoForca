import "./Letras.css";

export default function Letras(props) {
    const {setFimJogo, setVitoria, palavraSorteada, setIndiceImagem,
         totalErros, setTotalErros, letrasDesabilitadas, setLetrasDesabilitadas,
         setChuteHabilitado, alfabeto} = props;

    function verificaAdivinhouPalavra(letras) {
        let numLetras = 0;
        palavraSorteada.split("").forEach(l => {
            if (letras.includes(l)) numLetras++;
        });

        if (numLetras === palavraSorteada.length) return true;
        return false;
    }

    function contabilizaErro(qtdErros, letra) {
        if (!palavraSorteada.split("").includes(letra)) { // se errou a letra
            qtdErros++;
            setTotalErros(qtdErros);
            setIndiceImagem(qtdErros);
        }
    }

    function processaResultadoJogo(qtdErros, adivinhou) {
        if (qtdErros < 6 && adivinhou){ // vitoria
            // desabilita letras
            setLetrasDesabilitadas(alfabeto);
            setFimJogo(true);
            setVitoria(true);
            setChuteHabilitado(false);
        }
        if (qtdErros === 6 && !adivinhou){ // derrota
            // desabilita letras
            setLetrasDesabilitadas(alfabeto);
            setFimJogo(true);
            setVitoria(false);
            setChuteHabilitado(false);
        }
    }

    function processaLetra(letra) {
        const letrasDesabilitadasAtualizadas = [...letrasDesabilitadas, letra];
        setLetrasDesabilitadas(letrasDesabilitadasAtualizadas); // atualiza a mudança na variavel de estado

        const adivinhou = verificaAdivinhouPalavra(letrasDesabilitadasAtualizadas);
        let qtdErros = totalErros;

        contabilizaErro(qtdErros, letra);
        processaResultadoJogo(qtdErros, adivinhou);
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((l) => <button key={l} disabled={(letrasDesabilitadas.includes(l)) ? "disabled": ""}
                 className={`letra-alfabeto ${(letrasDesabilitadas.includes(l)) ? "usada": ""}`}
                 onClick={() => processaLetra(l)}> {l.toUpperCase()} </button>)}
        </div>
    )
}