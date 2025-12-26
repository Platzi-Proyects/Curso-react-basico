export default function ToDo(props){
    return(
        <li className="TodoItem">
            <p>
                {props.text}
            </p>
            <span>X </span>
            <span> V</span>
        </li>
    )
}