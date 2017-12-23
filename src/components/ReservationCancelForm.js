import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import TransactionAlert from './../components/TransactionAlert'
import InputItem from './InputItem'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { Field, reduxForm } from 'redux-form'
import { RESERVATION_TIMES } from './../constants/RestaurantConstants'
import { required } from './../utils/FormValidation'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value }, showTime, placeholder}) =>
    <DateTimePicker
        onChange={onChange}
        min={new Date()}
        format="DD/MM/YYYY"
        placeholder={placeholder}
        time={showTime}
        value={!value ? null : new Date(value)}
    />

class ReservationCancelForm extends Component {
    constructor() {
        super()
        this.state = { cancelBy: 'ID' }
    }

    changCancelBy(type) {
        this.setState({ cancelBy: type })
    }

    render() {
        let {
            isStartCancel,
            isSuccessCancel,
            isFailureCancel,
            handleSubmit
        } = this.props

        return (
            <CardLayout size="6">
                <form onSubmit={handleSubmit}>
                    <div className="row header justify-content-center">
                        CANCEL RESERVATION 
                    </div>

                    <div className="form-group">
                        <label>Cancel By:</label>
                        <Field 
                            name="cancelBy" 
                            component="select"
                            className="form-control"
                            onChange={(e)=>this.changCancelBy(e.target.value)}>
                            <option value="ID">Reservation ID</option>
                            <option value="Info">Reservation Info</option>
                        </Field>
                    </div>

                    {
                        this.state.cancelBy === 'ID' ?
                        (
                            <div className="form-group">
                                <label>Reservation ID:</label>
                                <Field 
                                    name="id" 
                                    component={InputItem} 
                                    type="text" 
                                    validate={[required]}
                                    placeholder="e.g. L1514039888"
                                />
                            </div>
                        )
                        :
                        (
                            <div>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label>Seat ID:</label>
                                        <Field 
                                            name="seatID" 
                                            component={InputItem} 
                                            type="text" 
                                            validate={[required]}
                                            placeholder="e.g. A1, B2"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label>Date:</label>
                                        <Field
                                            name="date"
                                            showTime={false}
                                            className="form-control"
                                            component={renderDateTimePicker}
                                            placeholder={moment(Date.now()).format('DD/MM/YYYY')}
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label>Time slot:</label>
                                        <Field 
                                            name="timeSlot" 
                                            component="select"
                                            className="form-control">
                                            {
                                                RESERVATION_TIMES.map((time, key) => 
                                                    <option 
                                                        key={key} 
                                                        value={time.slotId}>
                                                        {time.time}
                                                    </option>
                                                )
                                            }
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <TransactionAlert 
                        isLoading={isStartCancel}
                        isSuccess={isSuccessCancel}
                        isFailure={isFailureCancel}
                        topic="Cancel reservation"
                    />

                    <div className="form-group">
                        <button 
                            className="btn btn-warning btn-lg btn-block">
                            CANCEL NOW
                        </button>
                    </div>
                </form>
            </CardLayout>
        )
    }
}

ReservationCancelForm = reduxForm({
    form: 'reservationCancelForm'
})(ReservationCancelForm)

ReservationCancelForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isStartCancel: PropTypes.bool.isRequired,
    isSuccessCancel: PropTypes.bool.isRequired,
    isFailureCancel: PropTypes.bool.isRequired,
}

export default ReservationCancelForm