import * as types from '../constants/ActionTypes'
import { saveReservationToDB, removeReservationFromDB }  from './../utils/ReservationUtils'

export const reserveSeat = (info) => async (dispatch) => {
    let reservationInfo = await saveReservationToDB(info)
    let { status, msg } = reservationInfo

    dispatch({ type: types.RESERVE_SEAT_START })
    if (status === 0) {
        dispatch({ type: types.RESERVE_SEAT_SUCCESS, seat: msg })
    } else if (status === 1) {
        dispatch({ type: types.RESERVE_SEAT_FAILURE, msg: msg })
    } else {
        dispatch({ type: types.RESERVE_SEAT_FAILURE, msg: ""})
    }
}

export const cancelReservation = (info) => async (dispatch) => {
    let reservationInfo = await removeReservationFromDB(info)
    dispatch({ type: types.CANCEL_SEAT_START })
    if (reservationInfo) {
        dispatch({ type: types.CANCEL_SEAT_SUCCESS })
    } else {
        dispatch({ type: types.CANCEL_SEAT_FAILURE })
    }
}
