import React, { Component } from 'react'
import CouponList from './BillCouponList'

class BillForm extends Component {
    render() {
        const { 
            custNum, 
            coupons, 
            getCustNum, 
            addCoupon,
            removeCoupon
        } = this.props

        let couponInput

        return (
            <div>
                <div className="form-group">
                    <label>Total customers:</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={custNum}
                        onChange={(e)=>getCustNum(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Coupon Code:</label>
                    <div className="input-group"> 
                        <input 
                            type="text" 
                            className="form-control"
                            ref={(node)=>{couponInput=node}}
                        />
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-secondary" 
                                type="button"
                                onClick={()=>{
                                    couponInput.value !== '' && addCoupon(couponInput.value)
                                    couponInput.value = ''
                                }}>ADD
                            </button>
                        </span>
                    </div>
                    <CouponList 
                        coupons={coupons} 
                        removeCoupon={removeCoupon}
                    />
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