import React, { Component } from 'react'

class BillForm extends Component {
    render() {
        const { custNum, coupons, getCustNum } = this.props
        return (
            <div>
                <div className="form-group">
                    <label>Total customers:</label>
                    <input type="number" className="form-control" onKeyUp={(e)=>getCustNum(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Coupon Code:</label>
                    <div className="input-group"> 
                        <input type="text" className="form-control" />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">ADD</button>
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-success btn-lg btn-block">
                        Calculate
                    </button>
                </div>
            </div>
        )
    }
}

export default BillForm