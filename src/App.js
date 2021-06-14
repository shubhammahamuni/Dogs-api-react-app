import './App.css';
import Dogscard from './Component/dogscard';
import React, {useEffect , useState } from 'react'
import Dogsmodal  from "./Component/Dogmodal";
import Customsearch from './Component/Customsearch';




function App() {
  const [dogs, setdogs] = useState([]);
  const[list ,setlist ] = useState([]);
  const[isCustomSearch , setCustomSearch] = useState(false);
  
  
  
  useEffect(async ()=>{
    const responce = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await responce.json();
    const { message } = data ;
    const arrayofdogs = Object.entries({...message})
    setdogs([...arrayofdogs])

    
    

  },[])

  
 const filter=(e)=>{
  const temp = dogs;
  const filtered = temp.filter( (itm) => itm[0].includes(e.target.value))
  setlist(filtered);
  
 }
  const isVisibleCustomSearch =()=>{
    setCustomSearch(!isCustomSearch);
  }
  
  
  
  
  return (
    <div className="App">


      <div className="input-outer-block"> 
      <h2>Dogs galary</h2>
      <button onClick={isVisibleCustomSearch}>Custom Search</button>
      </div>
      
      <div className="search-block">
      <input className="search" type="text" onChange={filter}  placeholder="Type here to filter by bread"></input>
      </div>

      {isCustomSearch ?<Customsearch isVisibleCustomSearch={isVisibleCustomSearch} dogs_list_custom={dogs}/>:null }   

      <div className="galary"> 
           { list.length == 0 ? dogs.map((element ,i) => <Dogscard bread ={element[0]} sub_bread={dogs} index={i} />) : 
            
             list.map((element,i) => <Dogscard bread ={element[0] } sub_bread={list} index={i}/>) 
           } 
      </div>
        
    
      
            





    </div>
  );
}

export default App;
