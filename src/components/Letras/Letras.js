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

    function processaLetra(letra) {
        const letrasDesabilitadasAtualizadas = [...letrasDesabilitadas, letra];

        palavraSorteada.split("").forEach((l, i) => {
            const letraNormal = String.fromCodePoint(l.normalize("NFD").codePointAt(0));
            const temVersaoAcentuada = !isNaN(l.normalize("NFD").codePointAt(1));
            
            if ((letra === letraNormal) && temVersaoAcentuada) {
                letrasDesabilitadasAtualizadas.push(l);
            }
        });


        setLetrasDesabilitadas(letrasDesabilitadasAtualizadas); // atualiza a mudança na variavel de estado

        const adivinhou = verificaAdivinhouPalavra(letrasDesabilitadasAtualizadas);
        let qtdErros = totalErros;

        // se palavra sorteada não inclui letra
        // e se palavra sorteada sem acentos tbm não inclui letra
        if (!palavraSorteada.includes(letra) &&
                 !palavraSorteada.split("").map(l => String.fromCodePoint(l.normalize("NFD").codePointAt(0))).includes(letra)) { // se errou a letra
            qtdErros++;
            setTotalErros(qtdErros);
            setIndiceImagem(qtdErros);
        }
        
        // processa resultado jogo
        if (qtdErros < 6 && adivinhou){ // vitoria
            // desabilita letras
            setLetrasDesabilitadas([...alfabeto].concat(palavraSorteada.split("")));
            setFimJogo(true);
            setVitoria(true);
            setChuteHabilitado(false);
        }
        if (qtdErros === 6 && !adivinhou){ // derrota
            // desabilita letras
            setLetrasDesabilitadas([...alfabeto].concat(palavraSorteada.split("")));
            setFimJogo(true);
            setVitoria(false);
            setChuteHabilitado(false);
        }
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((l) => <button data-test="letter" key={l} disabled={(letrasDesabilitadas.includes(l)) ? "disabled": ""}
                 className={`letra-alfabeto ${(letrasDesabilitadas.includes(l)) ? "usada": ""}`}
                 onClick={() => processaLetra(l)}> {l.toUpperCase()} </button>)}
        </div>
    )
}