import "./Letras.css";

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"];

    return (
        <ul className="alfabeto">
            {alfabeto.map((l) => <li className="letra-alfabeto">{l.toUpperCase()}</li>)}
        </ul>
    )
}