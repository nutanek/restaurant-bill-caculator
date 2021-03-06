import React from 'react'
import PropTypes from 'prop-types'
import './../styles/BillCouponList.css'

const BillCouponList = (props) => {
    return (
        <div className="row bill-coupon-list">
                {
                    props.coupons.map((coupon, key) => 
                        <span 
                            key={key} 
                            className="badge badge-primary"
                            onClick={()=>props.removeBillCoupon(key)}>{coupon} x
                        </span>
                    )
                }
        </div>
    )
}

BillCouponList.propTypes = {
    coupons: PropTypes.array.isRequired,
    removeBillCoupon: PropTypes.func.isRequired
}

export default BillCouponList