import React from 'react'
import PropTypes from 'prop-types'

const TransactionAlert = (props) => {
    let {
        topic,
        isLoading,
        isSuccess,
        isFailure
    } = props

    if (isLoading) {
        return (
            <div className="alert alert-primary" role="alert">
                {topic} is processing..
            </div>
        )
    } else if (isSuccess) {
        return (
            <div className="alert alert-success" role="alert">
                Success, {topic}
            </div>
        )
    } else if (isFailure) {
        return (
            <div className="alert alert-danger" role="alert">
                Failure, {topic}
            </div>
        )
    } else {
        return null
    }
}

TransactionAlert.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isFailure: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired
}

export default TransactionAlert