import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    // const state = useState(0)
    // let numero = state[0]
    // let altNumero = state[1]

    // function incrementar() {
    //     altNumero(numero + 1)
    // }

    const [numero, setNumero] = useState(0) 
    // usando o React Hooks fica bem mais simples
    // Porque o useState é um array com o numero e uma função que altera o estado

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{ numero }</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}