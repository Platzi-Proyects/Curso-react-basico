export default function ToDo({ text, id, setAr }) {
    return (
        <li>
            <p>{text}</p>

            <span onClick={() =>
                setAr(prev =>
                    prev.map(e =>
                        e.id === id ? { ...e, completed: true } : e
                    )
                )
            }>
        ( Ya se termino )
      </span>

            <span onClick={() =>
                setAr(prev =>
                    prev.map(e =>
                        e.id === id ? { ...e, completed: false } : e
                    )
                )
            }>
                ( No se termino )
      </span>
        </li>
    )
}
