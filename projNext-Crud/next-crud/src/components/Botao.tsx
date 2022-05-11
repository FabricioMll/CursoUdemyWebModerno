interface BotaoProps {
    cor: 'green' | 'blue' | 'gray'
    className: string
    children: any
    onClick?: ()=> void
}

export default function Botao(props: BotaoProps) {
    const cores = props.cor ? props.cor : 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cores}-400 to-${cores}-700
            text-white
            px-4 py-2 rounded-md 
        `}>
            {props.children}
        </button>
    )
}