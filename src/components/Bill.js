import React from 'react'
import PageLayout from './../layouts/PageLayout'
import BillForm from './BillForm'
import './../styles/Bill.css'

const Bill = (props) => (
    <PageLayout>
        <div className="row justify-content-center">
            <div className="card col-lg-5 col-md-10 bill">
                <div className="card-body">
                    <Header title="BILL CALCULATOR"/>
                    <BillForm />
                </div>
            </div>
        </div>
    </PageLayout>
)

const Header = (props) => (
    <div className="row header justify-content-center">
       {props.title}
    </div>
)

export default Bill