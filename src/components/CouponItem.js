import React from 'react'
import PropTypes from 'prop-types'
import { COUPONS_TYPE } from './../constants/RestaurantConstants'
import './../styles/CouponItem.css'

const CouponList = (props) => {
    let {
        code,
        type,
        options
    } = props

    return (
        <tr className="coupon-item">
            <td className="code">{code}</td>
            <td>{COUPONS_TYPE[type-1].name}</td>
            <td>
            {
                ~[1,2].indexOf(type) ? 
                (
                    <div>
                        <p><b>Cust min:</b> {options.custStart}</p>
                        <p>
                            <b>Cust max: </b> 
                            {
                                options.custEnd === -1 
                                    ? 'infinity'
                                    : options.custEnd
                            }
                        </p>
                        <p>
                            <b>Discount:</b> {options.discountPercent}
                            { type === 1 ? '%' : ' Baht' }
                        </p>
                    </div>
                )
                :
                (
                    <div>
                        <p><b>Come:</b> {options.come}</p>
                        <p><b>Pay:</b> {options.pay}</p>
                    </div>
                )
            }
            </td>
            <td className="text-right">
                <button type="button" className="btn btn-sm btn-warning">
                    Edit
                </button>
                <button type="button" className="btn btn-sm btn-danger">
                    Remove
                </button>
            </td>
        </tr>
    )   
}

export default CouponList