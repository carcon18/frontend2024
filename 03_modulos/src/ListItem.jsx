const ListItem=(props)=>{
    return(
        <li>
            <a href={props.url}>{props.name}</a>
        </li>
    )
}

export default ListItem