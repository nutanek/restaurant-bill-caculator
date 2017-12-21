import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Bill from './BillReducer'
import Coupon from './CouponReducer'
import Reservation from './ReservationReducer'

const rootReducer = combineReducers({
    form: formReducer,
    Bill,
    Coupon,
    Reservation
})

export default rootReducer;