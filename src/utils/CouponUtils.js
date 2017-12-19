import { callApi } from './ApiUtils'
import { COUPON_API } from './../constants/ApiConstants'

const filterCouponInfo = (info) => {
    let {
        couponCode,
        couponType,
        discount,
        custStart,
        custEnd,
        come,
        pay
    } = info

    couponType = couponType ? parseInt(couponType, 10) : 1

    switch (couponType) {
        case 1:
        case 2:
            return {
                id: couponCode,
                type: couponType,
                options: {
                    [couponType === 1 
                        ? 'discountPercent' 
                        : 'discountMoney' 
                    ]: parseFloat(discount),
                    custStart: parseInt(custStart, 10),
                    custEnd: parseInt(custEnd, 10)
                }
            }
        case 3:
            return {
                id: couponCode,
                type: couponType,
                options: {
                    come: parseInt(come, 10),
                    pay: parseInt(pay, 10)
                }
            }
        default:
            return info
    }
}

export const addCouponToDB = async (info) => {
    let jsonRequest = filterCouponInfo(info)
    
    const { json } = await callApi(COUPON_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonRequest)
    })

    return json ? jsonRequest : null
}

export const fetchCouponFormDB = async (info) => {
    const { json } = await callApi(COUPON_API)
    return json || null    
}