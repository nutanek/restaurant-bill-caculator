import React from 'react'
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
                custNum={Bill.custNum}
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

export default Bill