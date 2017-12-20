import * as types from '../constants/ActionTypes'

const initialState = {
    isEditMode: false,
    currentEditIndex: 0,
    coupons: [],
    isStartAdd: false,
    isSuccessAdd: false,    
    isFailureAdd: false,
    info: {}
}

const Coupon = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.FETCH_COUPONS_SUCCESS:
            return {
                ...state,
                coupons: action.coupons,
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
                isStartAdd: false,
                info: {}
            }
        case types.ADD_COUPON_FAILURE:
            return {
                ...state,
                isFailureAdd: true,                
                isSuccessAdd: false,
                isStartAdd: false
            }
        case types.EDIT_COUPON:
            return {
                ...state,
                info: action.info,
                currentEditIndex: action.index,
                isEditMode: true
            }
        case types.CANCEL_EDIT_COUPON:
            return {
                ...state,
                info: {},
                isEditMode: false
            }
        case types.UPDATE_COUPON_START:
            return {
                ...state,
            }
        case types.UPDATE_COUPON_SUCCESS:
            return {
                ...state,
                isEditMode: false,
                coupons: [
                    ...state.coupons.slice(0, state.currentEditIndex),
                    action.info,
                    ...state.coupons.slice(state.currentEditIndex + 1)
                ],
                info: {}
            }
        case types.REMOVE_COUPON:
            return {
                ...state,
                coupons: state.coupons.filter((coupon, index) => index !== action.index)
            }
        default:
            return state
    }
}

export default Coupon