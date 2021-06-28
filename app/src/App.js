import './App.css';
import Data from './data.json';
import React,{useState} from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={event => {
        setSearchTerm(event.target.value)}}
        />
    {Data.filter((val) => {
      if (searchTerm == "") {
        return val
      } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return val 
      }
      else if (val.episode.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return val 
      }
      else if (val.content.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return val 
      }
    }).map((val, key) => {
      return <div className="data" key={key}>
        <h1>{val.title}</h1>
        <h3>{val.episode}</h3>
        <p>{val.content}</p>
      </div>
    })}
    </div>
  );
}

export default App;
