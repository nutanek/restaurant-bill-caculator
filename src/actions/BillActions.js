import * as types from '../constants/ActionTypes'

export const getBillForm = ({custNum, coupons}) => ({
    type: types.GET_BILL_FORM,
    custNum,
    coupons
})