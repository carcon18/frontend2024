import { buttonsClasses } from "../assets/buttonsClasses"

export const Button = ({
    label,
    class: buttonClass,
    columns,
    funtion: buttonFuntion
}) => {
    return(
        <td colSpan={columns}> 
        <button
          className={buttonsClasses[buttonClass]}
          type='button'
          onClick={'clearDisplay'}

        >
         {label}
        </button>

        
        </td>
    )
}