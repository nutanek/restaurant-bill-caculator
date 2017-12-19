import * as types from '../constants/ActionTypes'
import { addCouponToDB } from './../utils/CouponUtils'

export const addCoupon = (info) => async (dispatch) => {
    const json = await addCouponToDB(info)
    dispatch({ type: types.ADD_COUPON_START })
    if (json) {
        dispatch({ type: types.ADD_COUPON_SUCCESS , info })
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