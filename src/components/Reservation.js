import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import ReservationForm from './ReservationForm'
import ReservationResult from './ReservationResult'

class Reservation extends Component {
    render() {
        let {
            isFailureReserve,
            seatInfo,
            description,
            reserveSeat
        } = this.props

        return (
            <PageLayout>
                <ReservationForm
                    onSubmit={reserveSeat}
                />
                <ReservationResult
                    isFailureReserve={isFailureReserve}
                    seatInfo={seatInfo}
                    description={description}
                />
            </PageLayout>
        )
    }
}

Reservation.propTypes = {
    isFailureReserve: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    reserveSeat: PropTypes.func.isRequired
}

export default Reservation