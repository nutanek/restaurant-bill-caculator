import * as types from '../constants/ActionTypes'

const initialState = {
    coupons: [],
    info: {
        couponCode: "4PAY3",
    }
}

const Coupon = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ADD_COUPON:
            return {
                ...state,
                info: action.info
            }
        case types.UPDATE_COUPON:
            return {
                ...state,
                info: action.info
            }
        default:
            return state
    }
}

export default Coupon