import React from 'react'
import PageLayout from './../layouts/PageLayout'
import BillForm from './BillForm'

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
        </PageLayout>
    )
}

export default Bill