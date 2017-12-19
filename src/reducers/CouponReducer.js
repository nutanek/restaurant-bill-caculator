import * as types from '../constants/ActionTypes'

const initialState = {
    coupons: [],
    isStartAdd: false,
    isSuccessAdd: false,    
    isFailureAdd: false,
    info: {
        couponCode: "4PAY3",
    }
}

const Coupon = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.FETCH_COUPONS_SUCCESS:
            return {
                ...state,
                coupons: action.coupons
            }
        case types.ADD_COUPON_START:
            return {
                ...state,
                isStartAdd: true
            }
        case types.ADD_COUPON_SUCCESS:
            return {
                ...state,
                coupons: state.coupons.concat([action.info]),
                isSuccessAdd: true,
                isFailureAdd: false,
                isStartAdd: false
            }
        case types.ADD_COUPON_FAILURE:
            return {
                ...state,
                isFailureAdd: true,                
                isSuccessAdd: false,
                isStartAdd: false
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