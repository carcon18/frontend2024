import { buttonsClasses } from "../assets/buttonsClasses"

export const Button = ({
    label,
    class: buttonClass,
    columns,
    function: buttonFuntion,
    buttonsFunctions
}) => {
    return(
        <td colSpan={columns}> 
        <button
          className={buttonsClasses[buttonClass]}
          type='button'
          onClick={() => buttonsFunctions[buttonFuntion](label)}

        >
         {label}
        </button>

        
        </td>
    )
}

Button.propTypes={
label: 'string',
class: 'string',
columns: 'number',
function: 'string',
buttonsFunctions: 'object',
}