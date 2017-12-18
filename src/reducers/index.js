import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Bill from './BillReducer'
import Coupon from './CouponReducer'

const rootReducer = combineReducers({
    form: formReducer,
    Bill,
    Coupon
})

export default rootReducer;