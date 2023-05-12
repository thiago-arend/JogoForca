import "./Letras.css";

export default function Letras({habilitado}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"];

    return (
        <div className="alfabeto">
            {alfabeto.map((l) => <button key={l} disabled={(!habilitado) ? "disabled": ""}
                 className="letra-alfabeto" onClick={() => alert('clicou')}> {l.toUpperCase()} </button>)}
        </div>
    )
}