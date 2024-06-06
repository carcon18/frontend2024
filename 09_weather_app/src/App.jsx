import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchCity from "./components/SearchCity";
import './assets/css/index.css' 



const App = () => {
  const [cities, setCities] = useState(["Tuxtepec"])
  
  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr />
      <SearchCity cities={cities} setCities={setCities}/>
      <hr />
      <div className="row">
        
          {
            cities.map((city, index) => (
              <WeatherCard key={index} city={city}/> 
            
            ))
          }       
            
      </div>
    </div>
  )
}

export default App