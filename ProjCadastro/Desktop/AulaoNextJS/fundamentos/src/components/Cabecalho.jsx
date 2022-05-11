export default function Cabecalho(props) {
    console.log(props.titulo)
    // O parâmtro (no caso, 'props') é somente leitura
    return (
        <header>
            <h1>Fundamento de Next.JS e React</h1>
            <h2>{props.titulo}</h2>
        </header>
    )
} 