import * as types from '../constants/ActionTypes'

const initialState = {
    seatInfo: null,
    isStartReserve: false,
    isFailureReserve: false,
    description: ""
}

const Reservation = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.RESERVE_SEAT_START:
            return {
                ...state,
                seatInfo: null,
                isStartReserve: true,
                isFailureReserve: false,
                description: ""              
            }
        case types.RESERVE_SEAT_SUCCESS:
            return {
                ...state,
                seatInfo: action.seat,
                isStartReserve: false
            }
        case types.RESERVE_SEAT_FAILURE:
            return {
                ...state,
                seatInfo: null,
                isFailureReserve: true,
                isStartReserve: false,
                description: action.msg
            }
        default:
            return state
    }
}

export default Reservation