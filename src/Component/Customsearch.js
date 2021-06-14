import React from 'react'
import "./style.css";
import { useState } from "react";


function Customsearch({ isVisibleCustomSearch, dogs_list_custom }) {
    const select_ref = React.createRef("");
    const number_of_image = React.createRef("");
    const [imagearray, setimgaearray] = useState([]);

  


    const getImages = async () => {
        const responce = await fetch(`https://dog.ceo/api/breed/${select_ref.current.value}/images/random/${parseInt(number_of_image.current.value)}`);
        const data = await responce.json();
        const { message } = data;
        setimgaearray(message);


    }





    return (
        <>
            <div className="modal-outer-box">
                <div className="modal-box">
                    <div className="header">
                        <div>
                            <h3 className="custom-search">Custom Search</h3>
                            <button className="closebutton" onClick={isVisibleCustomSearch}>X</button>
                        </div>
                    </div>
                    <div className="drop-box-outer-div">
                        <div>
                            <select defaultValue="hound" ref={select_ref} >
                                {dogs_list_custom.map((element, indx) => { return <option key={indx} value={`${element[0]}`}>{element[0]}</option> })}
                            </select>
                        </div>
                        <input defaultValue="1" ref={number_of_image} type='number' />
                    </div>
                    <div className="Get-img-btn">
                        <button onClick={getImages}>GET IMAGE</button>
                    </div>
                    <div className="display-image-gallary">
                        {imagearray.length > 0 ? imagearray.map((imgs, i) => { return <img key={i} className="actual-image" src={imgs} /> }) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customsearch
