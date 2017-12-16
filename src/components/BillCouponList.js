import React from 'react'
import './../styles/BillCouponList.css'

const BillCouponList = (props) => {
    return (
        <div className="row bill-coupon-list">
                {
                    props.coupons.map((coupon, key) => 
                        <span 
                            key={key} 
                            className="badge badge-primary"
                            onClick={()=>props.removeCoupon(key)}>{coupon} x
                        </span>
                    )
                }
        </div>
    )
}

export default BillCouponList