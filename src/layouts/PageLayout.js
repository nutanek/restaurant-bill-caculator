import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../styles/PageLayout.css'

class PageLayout extends Component {
    constructor() {
        super()
        this.state = { isOpenSubmenu: false }
    }

    toggleSubMenu(status) {
        this.setState({ isOpenSubmenu: status })        
    }

    render() {
        return (
            <div className="container-fluid page-layout">
                <div className="row header">
                    <div className="col-md-6 text-center text-md-left logo">sss</div>
                    <div className="col-md-6 navs text-center text-md-right">
                        <Link to='/bill'><button className="btn btn-success">Bill Calculator</button></Link>
                        <Link to='/coupon'><button className="btn btn-warning">Coupons</button></Link>
                        <div 
                            className="btn-group"
                            onMouseOver={()=>this.toggleSubMenu(true)}
                            onMouseLeave={()=>this.toggleSubMenu(false)}>
                            <button type="button" className="btn btn-danger dropdown-toggle">Reservation</button>
                            {
                                this.state.isOpenSubmenu && (
                                    <div className="dropdown-menu">
                                        <Link to='/reservation'><span className="dropdown-item">Reserve</span></Link>
                                        <Link to='/reservation-cancel'><span className="dropdown-item">Cancel</span></Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="row content justify-content-center">
                    <div className="col-md-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageLayout