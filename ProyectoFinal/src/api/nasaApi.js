export const fetchAPOD = async (date) => {
    const url = import.meta.env.VITE_NASAAPI_APOD_URL
    const key = import.meta.env.VITE_NASAAPI_KEY
    console.log('Fetching APOD with URL:', `${url}?api_key=${key}&date=${date}`); // Debugging line

    const response = await fetch(`${url}?api_key=${key}&date=${date}`);
    const apodData = await response.json()
  
    return apodData
  }