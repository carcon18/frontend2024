import ListItem from "./ListItem.jsx"


const agenda =[
  {
    list: '1',
    name: 'Rocío Carlos Contreras',
    correo: 'contreras.rocioc18@gmail.com',
    phone: '2878881725',
    direccion: 'Mazin Grande'
  },
  {
    list: '2',
    name: 'César Carlos Contreras',
    correo: 'carlos.concesar012@gmail.com',
    phone: '2871764832',
    direccion: 'Mazin Grande'
  },
  {
    list: '3',
    name: 'Genoveva Capitán Trápaga',
    correo: 'geno.capitan098@gmail.com',
    phone: '2871288529',
    direccion: 'Mazin Grande'
  }
]

function App() {
  
  return (
    <>
    <div>
        <h1>
          Agenda
        </h1>
        <hr />
        <ul>
          
          {agenda.map((agenda) =>
          <ListItem 
          key={agenda.correo}
          list={agenda.list}
          name={agenda.name}
          correo={agenda.correo}
          phone={agenda.phone}
          direccion={agenda.direccion}
          />
          )}

        </ul>
      </div>     
    </>
  )
}

export default App
