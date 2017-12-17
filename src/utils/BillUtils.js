import { callApi } from './ApiUtils'
import { COUPON_INFO } from './../constants/ApiConstants'
import { BUFFET_PRICE, PROMOTIONS_PRICE } from './../constants/RestaurantConstants'

const getLeastPromotionPrice = custNum => {
    let subtotal = custNum * BUFFET_PRICE
    let leastTotal = subtotal
    PROMOTIONS_PRICE.forEach((promotion) => {
        if (subtotal > promotion.total) {
            let discount = subtotal * promotion.discountPercent / 100
            let total = (subtotal - discount).toFixed(2)
            leastTotal = Math.min(total, leastTotal)
        }
    })
    return leastTotal
}

const getLeastPromotionCoupon = async (custNum, coupons) => {
    const couponsInfo = await Promise.all(coupons.map(code => 
        callApi(COUPON_INFO.replace(':code', code))
    ))
    const result = couponsInfo
                    .filter((coupon) => coupon.json.length !== 0)
                    .map((coupon) => calCouponTotal(custNum, coupon.json[0]))
    return result.length > 0 ? Math.min(...result) : -1
}

const checkCustLimit = (custNum, start, end) => 
    (custNum >= start && (custNum <= end || end === -1))
        ? true : false


const calCouponTotal = (custNum, coupon) => {
    let { 
        type, 
        options: { 
            custStart, 
            custEnd, 
            discountPercent, 
            discountMoney,
            come, 
            pay 
        }
    } = coupon
    let subtotal = custNum * BUFFET_PRICE
 
    if (type === 1) {
        if (checkCustLimit(custNum, custStart, custEnd)) {
            return ((100 - discountPercent) * subtotal) / 100
        }
    } else if (type === 2) {
        if (checkCustLimit(custNum, custStart, custEnd)) {
            return subtotal - discountMoney
        }
    } else if (type === 3) {
        if (checkCustLimit(custNum, come, -1)) {
            let diff = come - pay
            return subtotal - (diff * BUFFET_PRICE)
        }
    }
    return subtotal
}

export const getTotalPrice = async (custNum, coupons) => {
    let leastTotal = getLeastPromotionPrice(custNum)

    if (coupons.length > 0) {
        try {
            let result = await getLeastPromotionCoupon(custNum, coupons)
            if (result !== -1) {
                leastTotal = Math.min(leastTotal, result)
            }
            return leastTotal
        } catch (error) {
            return leastTotal
        }
    }
    return leastTotal
}

