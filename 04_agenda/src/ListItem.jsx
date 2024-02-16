const ListItem=({list,name,correo,phone,direccion})=>{
    return(
        
        <li><b>Persona </b>{list}
        <ul>
            <li><b>Nombre: </b>{name}</li>
            <li><b>Correo: </b> {correo}</li>
            <li><b>Número de teléfono: </b> {phone}</li>
            <li><b>Dirección:</b> {direccion}</li>
            <br />
        </ul>
        </li>
    )
}

export default ListItem