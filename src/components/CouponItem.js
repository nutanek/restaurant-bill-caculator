import React from 'react'
import PropTypes from 'prop-types'
import { COUPONS_TYPE } from './../constants/RestaurantConstants'
import './../styles/CouponItem.css'

const CouponList = (props) => {
    let {
        index,
        info,
        editCoupon,
        removeCoupon
    } = props

    const remove = (code, index) => {
        let r = window.confirm(`Are you sure to remove coupon ${code} ?`)
        if (r) {
            removeCoupon(code, index)
        }
    }

    return (
        <tr className="coupon-item">
            <td className="code">{info.id}</td>
            <td>{COUPONS_TYPE[info.type-1].name}</td>
            <td>
            {
                ~[1,2].indexOf(info.type) ? 
                (
                    <div>
                        <p>
                            <b>Customers: </b> 
                            { formatNumberCustomer(info.options.custStart, info.options.custEnd) }
                        </p>
                        <p>
                            <b>Discount: </b>
                            { 
                                info.type === 1 
                                    ? `${info.options.discountPercent}%` 
                                    : `${info.options.discountMoney} Baht`
                            }
                        </p>
                    </div>
                )
                :
                (
                    <div>
                        <p><b>Come:</b> {info.options.come}</p>
                        <p><b>Pay:</b> {info.options.pay}</p>
                    </div>
                )
            }
            </td>
            <td className="text-right">
                <button 
                    type="button" 
                    className="btn btn-sm btn-warning"
                    onClick={()=>{
                        editCoupon(index, info)
                        window.scroll(0, 80)
                    }}>
                    Edit
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-danger"
                    onClick={()=>remove(info.id, index)}>
                    Remove
                </button>
            </td>
        </tr>
    )   
}

const formatNumberCustomer = (min, max) => {
    max = max < 0 ? 'infinity' : max
    return max === min ? min : `${min} - ${max}`
}

export default CouponList