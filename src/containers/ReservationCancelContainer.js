import React from 'react'
import { connect } from 'react-redux'
import { cancelReservation } from './../actions/ReservationActions'
import ReservationCancel from './../components/ReservationCancel'

const ReservationCancelContainer = props => <ReservationCancel {...props} />

const mapStateToProps = (state) => {
    const { Reservation } = state
    return {
        isStartCancel: Reservation.isStartCancel,
        isSuccessCancel: Reservation.isSuccessCancel,
        isFailureCancel: Reservation.isFailureCancel
    }
}

export default connect(mapStateToProps, {
    cancelReservation
})(ReservationCancelContainer)