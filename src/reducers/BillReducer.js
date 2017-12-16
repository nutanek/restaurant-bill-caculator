import * as types from '../constants/ActionTypes'

const initialState = {
    custNum: 1,
    coupons: [],
    subtotal: 0,
    total: 0,
    description: ""
}

const bill = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_BILL_FORM:
            return {
                ...state,
                custNum: action.custNum,
                coupons: action.coupons
            }
            break
        case types.GET_CUST_NUM:
            return {
                ...state,
                custNum: action.custNum
            }
            break
        default:
            return state
            break
    }
}

export default bill