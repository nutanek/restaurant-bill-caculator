import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import { Field, reduxForm } from 'redux-form'
import { RESERVATION_TIMES } from './../constants/RestaurantConstants'
import NumberPicker from 'react-widgets/lib/NumberPicker'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DateTimePicker
        onChange={onChange}
        min={new Date()}
        format="DD/MM/YYYY"
        placeholder="DD/MM/YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
    />

class ReservationForm extends Component {
    render() {
        let {
            handleSubmit
        } = this.props

        return (
            <CardLayout size="6">
                <form onSubmit={handleSubmit}>
                    <div className="row header justify-content-center">
                        SEATS RESERVATION
                    </div>

                    <div className="form-group">
                        <label>Number of customer:</label>
                        <Field 
                            name="custNum" 
                            component="input" 
                            type="text" 
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Zone:</label>
                        <Field 
                            name="zone" 
                            component="select"
                            className="form-control">
                            <option value="A">A (Counter bar)</option>
                            <option value="B">B (Panty zone)</option>
                        </Field>
                    </div>

                    <div className="row">
                        <div className="form-group col-6">
                            <label>Date:</label>
                            <Field
                                name="date"
                                showTime={false}
                                className="form-control"
                                component={renderDateTimePicker}
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

                    <div className="form-group">
                        <button 
                            className="btn btn-info btn-lg btn-block">
                            RESERVE NOW
                        </button>
                    </div>
                </form>
            </CardLayout>
        )
    }
}

ReservationForm = reduxForm({
    form: 'reservationForm',
    enableReinitialize : true
})(ReservationForm)

ReservationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ReservationForm