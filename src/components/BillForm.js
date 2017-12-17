import React, { Component } from 'react'
import CouponList from './BillCouponList'
import BillLayout from './../layouts/BillLayout'
import { getTotalPrice } from './../utils/BillUtils'

class BillForm extends Component {
    render() {
        const { 
            custNum, 
            coupons, 
            addCoupon,
            removeCoupon,
            setBillTotal
        } = this.props

        let custNumInput, couponInput

        return (
            <BillLayout>
                <div className="row header justify-content-center">
                    BILL CALCULATOR
                </div>

                <div className="form-group">
                    <label>Number of customers:</label>
                    <input 
                        type="number" 
                        className="form-control"
                        ref={(node)=>{custNumInput=node}}
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
                    <button 
                        className="btn btn-success btn-lg btn-block"
                        onClick={()=>setBillTotal(custNumInput.value, coupons)}>
                        Calculate
                    </button>
                </div>
            </BillLayout>
        )
    }
}

export default BillForm