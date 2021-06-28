import '../App.css';
import Data from './data.json';
import React,{useState} from 'react';


function Postdata() {
  const [searchTerm, setSearchTerm] = useState('')
 
  return (
    <div className="App">
      <div className="header">
      <h1>Friends API</h1>
      <p>Find the friends episode you are looking for by seaching things that happens in the episode</p>
      </div>
      
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
      else if (val.season.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return val 
      }
    }).map((val, key) => {
      return <div className="data" key={key}>
        <h1>{val.title}</h1>
        <h3>Season: {val.season}</h3>
        <h3>Episode: {val.episode}</h3>
        <p>{val.content}</p>
      </div>
    })}
    </div>
  );
}

export default Postdata;
