import React,{useState} from 'react'
import "./style.css"
import Dogmodal from './Dogmodal'



function Dogscard({bread ,index ,sub_bread}) {

    const[ismodal , setmodal] = useState(false)   
    
    const set_modal_visiblity =()=>{
        setmodal(!ismodal);
    }
   
 

    return (

        <>
        <div className="card_" id={index} onClick={set_modal_visiblity} >  
            
            <div className="img-div">
                <img  />
            </div>
           
            <p>
             {bread}
            </p>

        </div>
        <Dogmodal 
            set_modal_visiblity={set_modal_visiblity} 
            ismodal= {ismodal}
            sub_bread= {sub_bread}
            index= {index}
    
            />
        </>
    )
}

export default Dogscard
