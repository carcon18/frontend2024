import ListItem from "./ListItem.jsx"


const links =[
  {
    name: 'Google',
    url:'https://google.com'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com'
  }
]

function App() {

  return (
      <div>
        <h1>
          Links
        </h1>
        <hr />
        <ul>
          
          {links.map((link) =>
          <ListItem 
          key={link.name}
          name={link.name}
          url={link.url}
          />
          //<li key={link.name}>
          //<a href={link.url}>{link.name}</a>
          //</li>
          )}
        </ul>
      </div>

  )
}

export default App
