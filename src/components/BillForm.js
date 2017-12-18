import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CouponList from './BillCouponList'
import CardLayout from './../layouts/CardLayout'

class BillForm extends Component {
    render() {
        const { 
            coupons, 
            addBillCoupon,
            removeBillCoupon,
            setBillTotal
        } = this.props

        let custNumInput, couponInput

        return (
            <CardLayout size="5">
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
                                    couponInput.value !== '' && addBillCoupon(couponInput.value)
                                    couponInput.value = ''
                                }}>ADD
                            </button>
                        </span>
                    </div>
                    <CouponList 
                        coupons={coupons} 
                        removeBillCoupon={removeBillCoupon}
                    />
                </div>

                <div className="form-group">
                    <button 
                        className="btn btn-success btn-lg btn-block"
                        onClick={()=>setBillTotal(custNumInput.value, coupons)}>
                        Calculate
                    </button>
                </div>
            </CardLayout>
        )
    }
}

BillForm.propTypes = {
    coupons: PropTypes.array.isRequired, 
    addBillCoupon: PropTypes.func.isRequired,
    removeBillCoupon: PropTypes.func.isRequired,
    setBillTotal: PropTypes.func.isRequired
}

export default BillForm