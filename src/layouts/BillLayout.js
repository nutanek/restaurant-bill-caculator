import React from 'react'
import './../styles/BillLayout.css'

const BillLayout = (props) => (
    <div className="row justify-content-center">
        <div className="card col-lg-5 col-md-10 bill-layout">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default BillLayout