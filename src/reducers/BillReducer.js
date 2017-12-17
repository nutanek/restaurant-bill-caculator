import * as types from '../constants/ActionTypes'

const initialState = {
    custNum: 0,
    coupons: [],
    subtotal: 0,
    total: 0,
    isDisplayBill: false
}

const bill = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ADD_BILL_COUPON:
            return {
                ...state,
                coupons: state.coupons.concat([action.coupon])
            }
        case types.REMOVE_BILL_COUPON:
            return {
                ...state,
                coupons: state.coupons.filter((coupon, index) => index !== action.index)
            }
        case types.SET_BILL_TOTAL:
            return {
                ...state,
                custNum: action.custNum,
                subtotal: action.subtotal,
                total: action.total,
                isDisplayBill: true
            }
        default:
            return state
    }
}

export default bill