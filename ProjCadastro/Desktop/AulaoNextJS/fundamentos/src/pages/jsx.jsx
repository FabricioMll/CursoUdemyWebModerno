import Layout from "../components/Layout"

export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)

    const subt = <h2>Este subtítulo foi feito usando uma constante</h2>

    function subt2() {
        return <h2>Este aqui foi usando uma função</h2>
    }
    return (
        <Layout titulo="Entenedndo o JSx">
        <div>
            <h1>JSX é um conceito central</h1>
            {/*Tudo o que eu quiser colocar 
            como código JavaScript deve estar dentro de 
            um par de '{}' */}
            {subt}
            {subt2()}
            {a * b}
            <hr />
            {Math.random()}
            {/* O Math.random gera um número
            no lado servidor e depois o browser
            gera outro no lado cliente.*/}
        </div>
        </Layout>
    )
}