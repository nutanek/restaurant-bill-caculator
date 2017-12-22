import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import CouponForm from './CouponForm'
import CouponList from './CouponList'

class Coupon extends Component {
    componentWillMount() {
        const { fetchCoupon } = this.props
        fetchCoupon()
    }

    render() {
        let {
            Coupon,
            addCoupon,
            editCoupon,
            cancelEditCoupon,
            updateCoupon,
            removeCoupon
        } = this.props

        const handleSubmit = Coupon.isEditMode ? updateCoupon : addCoupon
    
        return (
            <PageLayout>
                <CouponForm
                    onSubmit={handleSubmit}           
                    cancelEditCoupon={cancelEditCoupon}         
                    info={Coupon.info}
                    isEditMode={Coupon.isEditMode}
                    isStartAdd={Coupon.isStartAdd}
                    isSuccessAdd={Coupon.isSuccessAdd}                
                    isFailureAdd={Coupon.isFailureAdd}
                />
                <CouponList
                    couponList={Coupon.coupons}
                    editCoupon={editCoupon}
                    removeCoupon={removeCoupon}
                />
            </PageLayout>
        )
    }
}

Coupon.propTypes = {
    addCoupon: PropTypes.func.isRequired,
    updateCoupon: PropTypes.func.isRequired,
}

export default Coupon