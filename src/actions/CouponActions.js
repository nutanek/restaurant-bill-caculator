import * as types from '../constants/ActionTypes'

export const addCoupon = (coupon) => ({
    type: types.ADD_COUPON,
    coupon
})

export const removeCoupon = (index) => ({
    type: types.REMOVE_COUPON,
    index
})

export const updateCoupon = (index, info) => ({
    type: types.UPDATE_COUPON,
    index,
    info
})