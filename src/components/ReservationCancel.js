import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import ReservationCancelForm from './ReservationCancelForm'

class ReservationCancel extends Component {
    render() {
        let {
            isStartCancel,
            isSuccessCancel,
            isFailureCancel,
            cancelReservation
        } = this.props

        return (
            <PageLayout>
               <ReservationCancelForm
                    onSubmit={cancelReservation}
                    isStartCancel={isStartCancel}
                    isSuccessCancel={isSuccessCancel}
                    isFailureCancel={isFailureCancel}
                />
            </PageLayout>
        )
    }
}

ReservationCancel.propTypes = {
    isStartCancel: PropTypes.bool.isRequired,
    isSuccessCancel: PropTypes.bool.isRequired,
    isFailureCancel: PropTypes.bool.isRequired,
    cancelReservation: PropTypes.func.isRequired
}

export default ReservationCancel