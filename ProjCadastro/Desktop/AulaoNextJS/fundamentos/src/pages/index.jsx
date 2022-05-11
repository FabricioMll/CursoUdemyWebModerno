import Navegador from '../components/Navegador'

export default function Inicio() {
    // Não adianta colocar '<h1>Título</h1>' entre aspas
    //porque ele vai interpretar tudo como string.
    // Tem que ou importar o 'React.createElement', ou 
    //posso codar diretamente em HTML, como segue:
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="rgb(45, 192, 111)"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/Navegacao" cor="green"></Navegador>
            <Navegador texto="Navegação #02" destino="/Cliente/sp-2/123" cor="blue"></Navegador>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"></Navegador>
            <Navegador texto="Integração_1" destino="/integracao_1" cor="red"></Navegador>
            <Navegador texto="Conteudo Estático" destino="/estatico" cor="rgb(150, 150, 150)"></Navegador>
        </div>
    )
}

