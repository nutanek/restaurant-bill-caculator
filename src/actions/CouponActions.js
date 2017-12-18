import * as types from '../constants/ActionTypes'

export const addCoupon = (info) => ({
    type: types.ADD_COUPON,
    info
})

export const removeCoupon = (index) => ({
    type: types.REMOVE_COUPON,
    index
})

export const updateCoupon = (info) => ({
    type: types.UPDATE_COUPON,
    info
})