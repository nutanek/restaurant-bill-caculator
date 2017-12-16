import React from 'react'
import PageLayout from './../layouts/PageLayout'
import './../styles/Bill.css'

const Bill = (props) => (
    <PageLayout>
        <div className="row justify-content-center">
            <div className="card col-lg-7 col-md-10 bill">
                <div className="card-body">
                    <Header title="Bill Calculator"/>
                    
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