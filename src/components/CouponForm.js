import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardLayout from './../layouts/CardLayout'
import InputItem from './InputItem'
import TransactionAlert from './TransactionAlert'
import { COUPONS_TYPE } from './../constants/RestaurantConstants'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required, number, minValue, notEquals, alphaNumeric } from './../utils/FormValidation'

const minValue1 = minValue(1)
const minValue2 = minValue(2)
const minValueMinus1 = minValue(-1)
const notEquals0 = notEquals(0)

class CouponForm extends Component {
    constructor() {
        super()
        this.state = { currentCouponType: 1 }  
    }

    onChangeCouponType(e) {
        let type = parseInt(e.target.value, 10)
        this.setState({ currentCouponType: type })
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.initialValues && this.props.initialValues &&
            nextProps.initialValues.couponType !== this.props.initialValues.couponType) {
            this.setState({ currentCouponType: nextProps.initialValues.couponType || 1 })
        }
    }

    render() {
        let { currentCouponType } = this.state
        let {
            handleSubmit,
            isEditMode,
            isStartAdd,
            isSuccessAdd,
            isFailureAdd,
            cancelEditCoupon
        } = this.props

        return (
            <CardLayout size="6">
                <form onSubmit={handleSubmit}>
                    <div className="row header justify-content-center">
                        COUPON MANAGER
                    </div>

                    <TransactionAlert 
                        isLoading={isStartAdd}
                        isSuccess={isSuccessAdd}
                        isFailure={isFailureAdd}
                        topic="Adding coupon"
                    />

                    <div className="form-group">
                        <label>Coupon Code:</label>
                        <Field 
                            name="couponCode" 
                            component={InputItem} 
                            type="text" 
                            readOnly={isEditMode && true}
                            validate={[required]}
                            warn={alphaNumeric}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type:</label>
                        <Field 
                            name="couponType" 
                            component="select"
                            className="form-control"
                            onChange={(e)=>this.onChangeCouponType(e)}>
                            {
                                COUPONS_TYPE.map(type => 
                                    <option 
                                        key={type.type} 
                                        value={type.type}>
                                        {type.name}
                                    </option>
                                )
                            }
                        </Field>
                    </div>
                    
                    {   /* Options of each coupon */
                        ~[1,2].indexOf(currentCouponType) ? 
                        (
                            <div className="form-group">
                                <div className="form-group">
                                    <label>Discount:</label>
                                    <Field 
                                        name="discount" 
                                        component={InputItem} 
                                        type="number" 
                                        validate={[required]}
                                        isGroup={true}
                                        addon={currentCouponType === 1 ? '%' : 'Bath' }
                                    />
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label>Number of customers:</label>
                                        <Field 
                                            name="custStart" 
                                            component={InputItem} 
                                            type="number" 
                                            validate={[required, minValue1]}
                                            warn={alphaNumeric}
                                            placeholder="Min"
                                        />
                                    </div>
                                    <div className="form-group col">
                                        <label>&nbsp;</label>
                                        <Field 
                                            name="custEnd" 
                                            component={InputItem} 
                                            type="number" 
                                            validate={[required, minValueMinus1, notEquals0]}
                                            placeholder="Max (-1 = infinity)"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) 
                        : 
                        (
                            <div className="row">
                                <div className="form-group col">
                                    <label>Number of customers:</label>
                                    <Field 
                                        name="come" 
                                        component={InputItem} 
                                        type="number" 
                                        validate={[required, minValue2]}
                                        placeholder="Come"
                                        warn={alphaNumeric}                                        
                                    />
                                </div>
                                <div className="form-group col">
                                    <label>&nbsp;</label>
                                    <Field 
                                        name="pay" 
                                        component={InputItem} 
                                        type="number" 
                                        validate={[required, number]}
                                        placeholder="Come"
                                        warn={alphaNumeric}                                        
                                    />
                                </div>
                            </div>
                        )
                    }
                    
                    <div className="form-group">
                        {
                            isEditMode ? (
                                <div className="row">
                                    <div className="col-8">
                                        <button 
                                            type="submit" 
                                            className="btn btn-success btn-lg btn-block">
                                            SAVE CHANGES
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button 
                                            className="btn btn-secondary btn-lg btn-block"
                                            onClick={()=>cancelEditCoupon()}>
                                            CANCEL
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg btn-block">
                                    CREATE
                                </button>
                            )
                        }    
                    </div>
                </form>
            </CardLayout>
        )
    }
}

CouponForm = reduxForm({
    form: 'couponForm',
    enableReinitialize : true
})(CouponForm)

CouponForm = connect(
    (state => ({initialValues: state.Coupon.info}))
)(CouponForm)

CouponForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    isStartAdd: PropTypes.bool.isRequired,
    isSuccessAdd: PropTypes.bool.isRequired,
    isFailureAdd: PropTypes.bool.isRequired,
    cancelEditCoupon: PropTypes.func.isRequired
}

export default CouponForm