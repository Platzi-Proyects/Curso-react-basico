export default function TodoItem ({title, id}) {
    return(
        <li key={id}>
            <h2>Tarea: {title}</h2>
            <div>
                <span>Hecho </span>

                <span> Borrar</span>
            </div>
        </li>
    )
}