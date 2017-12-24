import { callApi } from './ApiUtils'
import { COUPON_API, COUPON_INFO } from './../constants/ApiConstants'

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
                id: couponCode.toUpperCase(),
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

export const convertCouponToForm = (info) => {
    return {
        couponCode: info.id,
        couponType: info.type,
        discount: info.type === 1 
                    ? info.options.discountPercent 
                    : info.options.discountMoney,
        custStart: info.options.custStart,
        custEnd: info.options.custEnd,
        come: info.options.come,
        pay: info.options.pay
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

export const updateCouponToDB = async (code, info) => {
    let jsonRequest = filterCouponInfo(info)
    const { json } = await callApi(COUPON_INFO.replace(':code', code), {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonRequest)
    })
    return json ? jsonRequest : null
}

export const removeCouponFromDB = async (code) => {
    const { json } = await callApi(COUPON_INFO.replace(':code', code), {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })
    return json || null
}