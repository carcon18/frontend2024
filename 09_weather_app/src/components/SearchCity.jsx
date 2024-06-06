import { useForm } from "../Hooks/UseForm"

const SearchCity = ({cities, setCities}) => {
    const[values, handleInputChange, reset] = useForm ({
        city: ''
    }) 

    const handleSearchCity = () => {
        const newCities = [...cities, values.city]
        setCities(newCities)
        reset()
    }

return (
    <div className="input-group">
        <span className="input-group-text">
            City
        </span>
        <input 
            className="form-control"
            type="text"
            name="city" 
            onChange={handleInputChange}
            id="city" 
            value={values.city}
            />

            <button 
            type="button"
            onClick={handleSearchCity}
            className="btn btn-primary">
                Search
            </button>

    </div>
    )
}

export default SearchCity