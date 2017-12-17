import React from 'react'
import PageLayout from './../layouts/PageLayout'
import BillForm from './BillForm'
import BillPaper from './BillPaper'

const Bill = (props) => {
    const { 
        Bill, 
        getCustNum, 
        addCoupon,
        removeCoupon
    } = props

    return (
        <PageLayout>
            <BillForm
                custNum={Bill.custNum}
                coupons={Bill.coupons}
                getCustNum={getCustNum}
                addCoupon={addCoupon}
                removeCoupon={removeCoupon}
            />
            <BillPaper 
                custNum={Bill.custNum}
            />
        </PageLayout>
    )
}

export default Bill