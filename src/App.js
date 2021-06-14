import './App.css';
import Dogscard from './Component/dogscard';
import React, { useEffect, useState } from 'react'
import Dogsmodal from "./Component/Dogmodal";
import Customsearch from './Component/Customsearch';




function App() {

  const [dogs, setdogs] = useState([]); //main copy of Recieved api data
  const [list, setlist] = useState([]);//this can be populated based on search of user

  //After pressing Custom Search The Pop up should be Visible or not
  const [isCustomSearch, setCustomSearch] = useState(false);



  useEffect(async () => {

    //This will featch Data from Api and set to Dogs list
    const responce = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await responce.json();
    const { message } = data;
    const arrayofdogs = Object.entries({ ...message })
    setdogs([...arrayofdogs])

  }, [])

  //This Function is responcible to populate temparary(list) for querry
  const filter = (e) => {
    const temp = dogs;
    const filtered = temp.filter((itm) => itm[0].includes(e.target.value))
    setlist(filtered);

  }

  //custom pop up search visibility 
  const isVisibleCustomSearch = () => {
    setCustomSearch(!isCustomSearch);
  }




  return (
    <div className="App">


      <div className="input-outer-block">
        <h2>Dogs galary</h2>
        <button onClick={isVisibleCustomSearch}>Custom Search</button>
      </div>

      <div className="search-block">
        <input className="search" type="text" onChange={filter} placeholder="Type here to filter by bread"></input>
      </div>
      {/* Custome search pop up Component when custom search button hasbeen pressed */}
      
      {isCustomSearch ? <Customsearch isVisibleCustomSearch={isVisibleCustomSearch} dogs_list_custom={dogs} /> : null}

      <div className="galary">
        {/* The Dogscard is the single block where it has image inside it an name under that image           */}
        
        {list.length == 0 ? dogs.map((element, i) => <Dogscard bread={element[0]} sub_bread={dogs} index={i} />) :

          list.map((element, i) => <Dogscard bread={element[0]} sub_bread={list} index={i} />)
        }
      </div>









    </div>
  );
}

export default App;
