import * as types from '../constants/ActionTypes'
import { BUFFET_PRICE } from '../constants/RestaurantConstants'
import { getTotalPrice } from './../utils/BillUtils'

export const addCoupon = (coupon) => ({
    type: types.ADD_BILL_COUPON,
    coupon
})

export const removeCoupon = (index) => ({
    type: types.REMOVE_BILL_COUPON,
    index
})

export const setBillTotal = (custNum, coupons) => async (dispatch) => {
    let subtotal = custNum * BUFFET_PRICE
    let total = await getTotalPrice(custNum, coupons)
    dispatch({
        type: types.SET_BILL_TOTAL,
        custNum: custNum || 0,
        subtotal,
        total
    })
}