import * as types from '../constants/ActionTypes'

const initialState = {
    custNum: 1,
    coupons: [],
    subtotal: 0,
    total: 0
}

const bill = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_CUST_NUM:
            return {
                ...state,
                custNum: action.custNum
            }
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
        default:
            return state
    }
}

export default bill