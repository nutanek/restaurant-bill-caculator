import * as types from '../constants/ActionTypes'
import { addCouponToDB, fetchCouponFormDB } from './../utils/CouponUtils'

export const fetchCoupon = () => async (dispatch) => {
    const coupons = await fetchCouponFormDB()
    if (coupons) {
        dispatch({ type: types.FETCH_COUPONS_SUCCESS, coupons }) 
    }
}

export const addCoupon = (info) => async (dispatch) => {
    const coupon = await addCouponToDB(info)
    dispatch({ type: types.ADD_COUPON_START })
    if (coupon) {
        dispatch({ type: types.ADD_COUPON_SUCCESS , info: coupon })
    } else {
        dispatch({ type: types.ADD_COUPON_FAILURE })
    }
}

export const removeCoupon = (index) => ({
    type: types.REMOVE_COUPON,
    index
})

export const updateCoupon = (info) => ({
    type: types.UPDATE_COUPON,
    info
})