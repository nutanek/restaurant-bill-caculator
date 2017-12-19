import React from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import CouponItem from './CouponItem'

const CouponList = (props) => {
    let {
        couponList
    } = props

    return (
        <CardLayout size="8">
            <div className="row header justify-content-center">
                COUPONS LIST
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Coupon Code</th>
                        <th>Type</th>
                        <th>Options</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    couponList.map((coupon, key) => 
                        <CouponItem
                            key={key}
                            code={coupon.id}
                            type={coupon.type} 
                            options={coupon.options} 
                        />
                    )
                }
                </tbody>
            </table>
        </CardLayout>
    )   
}

export default CouponList