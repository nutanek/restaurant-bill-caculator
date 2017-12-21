import React from 'react'
import PropTypes from 'prop-types'
import AlertContainer from 'react-alert'

class TransactionAlert extends React.Component {
    alertOptions = {
        offset: 14,
        position: 'bottom right',
        theme: 'light',
        time: 5000,
        transition: 'scale'
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.isLoading && !nextProps.isLoading) {
            return true
        } else {
            return false
        }
    }

    componentDidUpdate() {
        if (this.props.isSuccess) {
            this.msg.show(`Success, ${this.props.topic}`, {
                time: 3000,
                type: 'success'
              })
        } else {
            this.msg.show(`Failure, ${this.props.topic}`, {
                time: 3000,
                type: 'error'
            })
        }
    }

    render() {
        return (
            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        )
    }
}

TransactionAlert.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isFailure: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired
}

export default TransactionAlert