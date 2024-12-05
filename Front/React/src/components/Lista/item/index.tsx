export default function Item{
    return(
        <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
        </li>
    )
}