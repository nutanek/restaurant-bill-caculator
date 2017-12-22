import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import ReservationForm from './ReservationForm'
import ReservationResult from './ReservationResult'

class Reservation extends Component {
    render() {
        let {
            Reservation,
            reserveSeat
        } = this.props

        return (
            <PageLayout>
                <ReservationForm
                    onSubmit={reserveSeat}
                />
                <ReservationResult
                    isFailureReserve={Reservation.isFailureReserve}
                    seatInfo={Reservation.seatInfo}
                    description={Reservation.description}
                />
            </PageLayout>
        )
    }
}

Reservation.propTypes = {
    Reservation: PropTypes.object.isRequired,
    reserveSeat: PropTypes.func.isRequired
}

export default Reservation