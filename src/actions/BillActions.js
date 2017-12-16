import * as types from '../constants/ActionTypes'

export const getBillForm = ({custNum, coupons}) => ({
    type: types.GET_BILL_FORM,
    custNum,
    coupons
})

export const getCustNum = (custNum) => ({
    type: types.GET_CUST_NUM,
    custNum
})

export const addCoupon = (coupon) => ({
    type: types.ADD_BILL_COUPON,
    coupon
})

export const removeCoupon = (index) => ({
    type: types.REMOVE_BILL_COUPON,
    index
})