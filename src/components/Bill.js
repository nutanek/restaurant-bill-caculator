import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import BillForm from './BillForm'
import BillPaper from './BillPaper'

const Bill = (props) => {
    const { 
        Bill, 
        addBillCoupon,
        removeBillCoupon,
        setBillTotal
    } = props

    return (
        <PageLayout>
            <BillForm
                coupons={Bill.coupons}
                addBillCoupon={addBillCoupon}
                removeBillCoupon={removeBillCoupon}
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
    addBillCoupon: PropTypes.func.isRequired,
    removeBillCoupon: PropTypes.func.isRequired,
    setBillTotal: PropTypes.func.isRequired
}

export default Bill