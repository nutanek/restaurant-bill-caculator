import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/PageLayout.css'

const PageLayout = (props) => (
    <div className="container-fluid page-layout">
        <div className="row header">
            <div className="col-md-6 text-center text-md-left logo">sss</div>
            <div className="col-md-6 navs text-center text-md-right">
                <Link to='/'><button className="btn btn-success">Bill Calculator</button></Link>
                <Link to='/'><button className="btn btn-warning">Coupons</button></Link>
                <Link to='/'><button className="btn btn-danger">Reservation</button></Link>
            </div>
        </div>
        <div className="row content justify-content-center">
            <div className="col-md-10">
                {props.children}
            </div>
        </div>
    </div>
)

export default PageLayout