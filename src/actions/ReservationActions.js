import * as types from '../constants/ActionTypes'
import { saveReservationToDB }  from './../utils/ReservationUtils'

export const reserveSeat = (info) => async (dispatch) => {
    let reservationInfo = await saveReservationToDB(info)
    let { status, msg } = reservationInfo

    dispatch({ type: types.RESERVE_SEAT_START })
    if (status === 0) {
        dispatch({ type: types.RESERVE_SEAT_SUCCESS, seat: msg })
    } else if (status === 1) {
        dispatch({ type: types.RESERVE_SEAT_FAILURE, msg: msg })
    } else {
        dispatch({ type: types.RESERVE_SEAT_SUCCESS, msg: ""})
    }
}
