import * as types from '../constants/ActionTypes'
import { 
    addCouponToDB, 
    fetchCouponFormDB, 
    updateCouponToDB,
    convertCouponToForm
} from './../utils/CouponUtils'

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

export const editCoupon = (index, info) => ({
    type: types.EDIT_COUPON,
    info: convertCouponToForm(info),
    index
})

export const updateCoupon = (info) => async (dispatch) => {
    const coupon = await updateCouponToDB(info.couponCode, info)
    dispatch({ type: types.UPDATE_COUPON_START })
    if (coupon) {
        dispatch({ type: types.UPDATE_COUPON_SUCCESS , info: coupon })
    } else {
        dispatch({ type: types.UPDATE_COUPON_FAILURE })
    }
}

export const removeCoupon = (index) => ({
    type: types.REMOVE_COUPON,
    index
})