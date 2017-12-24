import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../images/logo-lg.png'
import './../styles/Home.css'

const Home = (props) => (
    <div className="container-fluid">
        <div  className="row home-wrapper justify-content-center align-items-center">
            <div className="col-10">
                <div className="row">
                    <div className="col logo">
                        <img src={logo} className="img-fluid" alt="logo"/>
                    </div>
                </div>
                <div className="row menu-group justify-content-center">
                    <Link to='/bill'>
                        <div className="menu img_fade">
                            bill calculator
                        </div>
                    </Link>
                    <Link to='/coupon'>
                        <div className="menu img_fade">
                            coupons
                        </div>
                    </Link>
                    <Link to='/reservation'>
                        <div className="menu img_fade">
                            reservation
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Home