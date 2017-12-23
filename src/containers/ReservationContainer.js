import React from 'react'
import { connect } from 'react-redux'
import { reserveSeat } from './../actions/ReservationActions'
import Reservation from './../components/Reservation'

const ReservationContainer = props => <Reservation {...props} />

const mapStateToProps = (state) => {
    const { Reservation } = state
    return {
        isFailureReserve: Reservation.isFailureReserve,
        seatInfo: Reservation.seatInfo,
        description: Reservation.description
    }
}

export default connect(mapStateToProps, {
    reserveSeat
})(ReservationContainer)