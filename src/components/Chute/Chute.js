import './Chute.css';

export default function Chute(props) {
    const {setIndiceImagem, setFimJogo, setVitoria, letrasDesabilitadas, setChuteHabilitado, 
            alfabeto, chuteHabilitado, setLetrasDesabilitadas, palavraSorteada, chute, setChute} = props;

    function validaChute() {
        setFimJogo(true);
        setLetrasDesabilitadas(alfabeto);

        if (chute === palavraSorteada) {
            setVitoria(true);
        }
        else {
            setVitoria(false);
            setIndiceImagem(6);
        }

        setChuteHabilitado(false);
        setChute("");
    }

    return (
        <div className="container-chute">
            <span>Já sei a palavra!</span>
            <input disabled={!chuteHabilitado ? "disabled" : ""} 
                onChange={ (e) => setChute(e.target.value) } type="text" value={ chute }></input>
            <button disabled={!chuteHabilitado ? "disabled" : ""} onClick={ validaChute }>Chutar</button>
        </div>
    )
}