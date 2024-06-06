export const getCurrentWeather = async (city) => {
    const url = import.meta.env.VITE_WEATHERAPI_CURRENT_URL
    const key = import.meta.env.VITE_WEATHERAPI_KEY
    const response = await fetch(`${url}?key=${key}&q=${city}&aqi=no&lang=es`);
    const weather = await response.json()
  
    return weather
  }