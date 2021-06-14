import React, { useState } from 'react'
import "./style.css"
import Dogscard from "./dogscard";
import Modal_child from './modal-child';



function Dogmodal({ set_modal_visiblity, ismodal, sub_bread, index }) {
    let child = [...sub_bread[index][1]];




    return (

        ismodal ? (
            <>
                <div className="modal-outer-box">
                    <div className="modal-box">
                        <div className="header">
                            <div>
                                <span>Select Dogs Bread Name</span>
                                <button className="closebutton" onClick={set_modal_visiblity}>X</button>
                            </div>
                        </div>
                        <div className="display-cards">
                            {/* modal child is the card which has image inside it and name of sub-bread */}
                            {child.length > 0 ? child.map((element) => { return <Modal_child bread={element} /> }) : <p> No Sub bread found</p>}
                        </div>
                    </div>
                </div>
            </>
        ) : null
    )
}
export default Dogmodal
