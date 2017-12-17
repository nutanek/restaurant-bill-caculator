import React, { Component } from 'react'
import BillLayout from './../layouts/BillLayout'
import './../styles/BillPaper.css'

class BillPaper extends Component {
    getCurrentTime() {
        var d = new Date()
        return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
    }

    render() {
        const {
            custNum
        } = this.props

        return (
            <BillLayout>
                <div className="bill-paper">
                    <div className="row header justify-content-center">
                        THANK YOU
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>STATUS</td>
                                <td className="text-warning">Pending</td>
                            </tr>
                            <tr>
                                <td>DATE</td>
                                <td>{this.getCurrentTime()}</td>
                            </tr>
                            <tr className="under">
                                <td>SEAT(s)</td>
                                <td>{custNum}</td>
                            </tr>
                            <tr>
                                <td>SUBTOTAL</td>
                                <td>100</td>
                            </tr>
                            <tr className="under">
                                <td>DISCOUNT</td>
                                <td className="text-danger">-฿20.50</td>
                            </tr>
                            <tr className="text-center">
                                <td colspan="2">
                                    <span>TOTAL</span>
                                    <span className="total">฿459</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BillLayout>
        )
    }
}

export default BillPaper