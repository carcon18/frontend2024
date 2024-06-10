import { useForm } from "../Hooks/UseForm"

const SearchDate = ({dates, setDates}) => {
    const[values, handleInputChange, reset] = useForm ({
        date: ''
    }) 

    const handleSearchDate = () => {
        if (values.date) {
            const newDates = [...dates, values.date];
            setDates(newDates);
            reset();
          } else {
            console.error('Date input is empty.');
          }
        }

return (
    <div className="input-group">
        <span className="input-group-text">
            Date
        </span>
        <input 
            className="form-control"
            type="date"
            name="date" 
            onChange={handleInputChange}
            id="date" 
            value={values.date}
            />

            <button 
            type="button"
            onClick={handleSearchDate}
            className="btn btn-primary">
                Search
            </button>

    </div>
    )
}

export default SearchDate