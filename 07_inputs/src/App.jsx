import { useForm } from "./Hooks/userForm";

const InputsData = {
  username: '',
  password: '',
  checkbox: false,
  color: '#ffffff',
  date: '',
  datetimeLocal: '',
  email: '',
  hidden: '',
  month: '',
  number: '',
  passwordInput: '',
  radio: '',
  range: 50, // Puedes ajustar el valor inicial según el rango que establezcas
  search: '',
  tel: '',
  text: '',
  time: '',
  url: '',
  week: ''
};

function App() {
  const [values, handleInputChange, inputsReset] = useForm(InputsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Aquí puedes manejar los valores del formulario como necesites
    inputsReset();
  };

  return (
    <>
      <div className='text-center'>
        <h1 align="center">INPUT</h1>
        <hr />
        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleInputChange} id="username" name="username" type="text" value={values.username} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={handleInputChange} id="password" name="password" type="password" value={values.password} />
          </div>
          
          {/* Nuevos inputs agregados */}
          <div>
            <label htmlFor="checkbox">Checkbox</label>
            <input onChange={handleInputChange} id="checkbox" name="checkbox" type="checkbox" checked={values.checkbox} />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input onChange={handleInputChange} id="color" name="color" type="color" value={values.color} />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input onChange={handleInputChange} id="date" name="date" type="date" value={values.date} />
          </div>
          <div>
            <label htmlFor="datetimeLocal">Datetime-Local</label>
            <input onChange={handleInputChange} id="datetimeLocal" name="datetimeLocal" type="datetime-local" value={values.datetimeLocal} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={handleInputChange} id="email" name="email" type="email" value={values.email} />
          </div>
          <div>
            <label htmlFor="month">Month</label>
            <input onChange={handleInputChange} id="month" name="month" type="month" value={values.month} />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input onChange={handleInputChange} id="number" name="number" type="number" value={values.number} />
          </div>
          <div>
            <label htmlFor="passwordInput">New Password</label>
            <input onChange={handleInputChange} id="passwordInput" name="passwordInput" type="password" value={values.passwordInput} />
          </div>
          <div>
            <label htmlFor="radio">Radio</label>
            <input onChange={handleInputChange} id="radio" name="radio" type="radio" value={values.radio} />
          </div>
          <div>
            <label htmlFor="range">Range</label>
            <input onChange={handleInputChange} id="range" name="range" type="range" value={values.range} />
          </div>
          <div>
            <label htmlFor="search">Search</label>
            <input onChange={handleInputChange} id="search" name="search" type="search" value={values.search} />
          </div>
          <div>
            <label htmlFor="tel">Telephone</label>
            <input onChange={handleInputChange} id="tel" name="tel" type="tel" value={values.tel} />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input onChange={handleInputChange} id="text" name="text" type="text" value={values.text} />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input onChange={handleInputChange} id="time" name="time" type="time" value={values.time} />
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <input onChange={handleInputChange} id="url" name="url" type="url" value={values.url} />
          </div>
          <div>
            <label htmlFor="week">Week</label>
            <input onChange={handleInputChange} id="week" name="week" type="week" value={values.week} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <hr />
        <div>
          <h6>Inicio de sesión con las siguientes credenciales:</h6>
          {/* Mapeo dinámico de los valores del formulario */}
          {Object.entries(values).map(([key, value]) => {
            // Convierte la primera letra de la clave a mayúscula y reemplaza camelCase por espacios
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            
            // Decide cómo quieres mostrar los valores booleanos, por ejemplo, para checkboxes
            const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
            
            return <p key={key}>{formattedKey}: {displayValue}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
