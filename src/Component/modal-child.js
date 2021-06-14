import React from 'react';
import "./style.css";

function Modal_child({ bread }) {
    return (

        <div className="card_">

            <div className="img-div">
                <img />
            </div>

            <p>
                {bread}
            </p>

        </div>

    )
}

export default Modal_child
