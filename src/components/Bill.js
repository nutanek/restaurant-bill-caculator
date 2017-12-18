import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import BillForm from './BillForm'
import BillPaper from './BillPaper'

const Bill = (props) => {
    const { 
        Bill, 
        addCoupon,
        removeCoupon,
        setBillTotal
    } = props

    return (
        <PageLayout>
            <BillForm
                coupons={Bill.coupons}
                addCoupon={addCoupon}
                removeCoupon={removeCoupon}
                setBillTotal={setBillTotal}
            />
            <BillPaper 
                custNum={Bill.custNum}
                subtotal={Bill.subtotal}
                total={Bill.total}
                isDisplayBill={Bill.isDisplayBill}
            />
        </PageLayout>
    )
}

Bill.propTypes = {
    Bill: PropTypes.object.isRequired,
    addCoupon: PropTypes.func.isRequired,
    removeCoupon: PropTypes.func.isRequired,
    setBillTotal: PropTypes.func.isRequired
}

export default Bill