import { useState } from "react"


function App () {
  //hooks
  const[contador, setContador] = useState(0)
  const handleButtonIncrementar = () => {
    setContador (contador + 1)

    
    
  }
  return (
    <div>
      <h1>Contador</h1>
    <hr />
      <h2>{contador}</h2>
      <button 
        onClick={handleButtonIncrementar}
      >
        Incrementar
      </button>

      <button 
        onClick={() => setContador (contador - 1)}
      >
        Decrementar
      </button>

      <button 
        onClick={() => setContador (contador - contador)}
      >
        Resetear
      </button>
      
    </div>

    
  )

  
}

export default App