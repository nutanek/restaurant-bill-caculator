import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import ReservationForm from './ReservationForm'

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
                    isStartReserve={Reservation.isStartReserve}
                    isFailureReserve={Reservation.isFailureReserve}
                    seatInfo={Reservation.seatInfo}
                />
            </PageLayout>
        )
    }
}

export default Reservation