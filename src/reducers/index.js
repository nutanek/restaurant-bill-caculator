import { combineReducers } from 'redux'
import Bill from './BillReducer'
import Coupon from './CouponReducer'

const rootReducer = combineReducers({
    Bill,
    Coupon
})

export default rootReducer;