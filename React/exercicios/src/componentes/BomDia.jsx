import React from 'react'

export default props => 
    <React.Fragment>
        <h1>Bom Dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>
    // Pode ser usado qqr elemento html, mas
    //é melhor usar React.Fragment para não ter 
    //problemas com layout