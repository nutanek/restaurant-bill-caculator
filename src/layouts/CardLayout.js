import React from 'react'
import './../styles/CardLayout.css'

const CardLayout = (props) => (
    <div className="row justify-content-center">
        <div className={`card col-lg-${props.size} col-md-10 card-layout`}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default CardLayout