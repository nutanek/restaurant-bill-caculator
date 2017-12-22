import React from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import CouponItem from './CouponItem'

const CouponList = (props) => {
    let {
        couponList,
        editCoupon,
        removeCoupon
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
                        <th className="d-none d-md-block">Options</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    couponList.map((coupon, key) => 
                        <CouponItem
                            key={key}
                            index={key}                            
                            info={coupon}
                            editCoupon={editCoupon}
                            removeCoupon={removeCoupon}
                        />
                    )
                }
                </tbody>
            </table>
        </CardLayout>
    )   
}

CouponList.propTypes = {
    couponList: PropTypes.array.isRequired,
    editCoupon: PropTypes.func.isRequired,
    removeCoupon: PropTypes.func.isRequired
}

export default CouponList