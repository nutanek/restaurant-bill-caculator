import * as types from '../constants/ActionTypes'
import { BUFFET_PRICE } from '../constants/RestaurantConstants'
import { getTotalPrice } from './../utils/BillUtils'

export const addBillCoupon = (coupon) => ({
    type: types.ADD_BILL_COUPON,
    coupon
})

export const removeBillCoupon = (index) => ({
    type: types.REMOVE_BILL_COUPON,
    index
})

export const setBillTotal = (custNum, coupons) => async (dispatch) => {
    custNum = custNum ? Math.abs(parseInt(custNum, 10)) : 0    
    let subtotal = custNum * BUFFET_PRICE
    let total = await getTotalPrice(custNum, coupons)
    dispatch({
        type: types.SET_BILL_TOTAL,
        custNum,
        subtotal,
        total
    })
}