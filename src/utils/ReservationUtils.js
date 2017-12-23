import moment from 'moment'
import { callApi } from './ApiUtils'
import { RESERVATION_API, RESERVATION_INFO } from './../constants/ApiConstants'
import { SEATS_INFO } from './../constants/RestaurantConstants'

const getSeatID = (allSeats, bookedSeats) => {
    let totalSeats = allSeats.length
    let found = false
    let availableSeat = null
    if (bookedSeats.length === 0) {
        return allSeats[0]
    }
    for(let i=0; i<totalSeats && !found; i++) {
        if (!bookedSeats[i] || allSeats[i].id !== bookedSeats[i].seatId) {
            availableSeat = allSeats[i]
            found = true
        }
    }
    return availableSeat
}

const generateReservationId = () => {
    let currentTime = moment().unix();
    return "L" + currentTime
}

export const fetchReservation = async (options) => {
    const { json } = await callApi(RESERVATION_INFO.replace(':options', options))
    return json || null
}

const findAvailableSeat = async ({ zone="A", custNum=1, date, timeSlot=1}) => {
    date = moment(date).startOf('day').unix() * 1000
    let reservationInfo = await fetchReservation(
        `?zone=${zone}&date=${date}&timeSlot=${timeSlot}&_sort=seatId`
    )
    if (reservationInfo) {
        let availableSeat
        if (zone === "A") {
            availableSeat = getSeatID(SEATS_INFO.A, reservationInfo)
        } else {
            custNum = parseInt(custNum, 10)
            let allSeats = SEATS_INFO.B.filter((seat)=>seat.seat>=custNum)
            let allSeatsId = allSeats.map(seat=>seat.id)
            let bookedSeats = reservationInfo.filter((seat)=>allSeatsId.indexOf(seat.seatId)>-1)
            availableSeat = getSeatID(allSeats, bookedSeats)
        }
        if (availableSeat !== null) {
            return { status: 0, msg: availableSeat }
        }
        return { status: 1, msg: "No seats available" }
    }
    return { status: 2, msg: "connection failed" }
}

export const saveReservationToDB = async (formInfo) => {
    let seatInfo = await findAvailableSeat(formInfo)
    switch (seatInfo.status) {
        case 0:
            let date = moment(formInfo.date).startOf('day').unix() * 1000
            let reservationInfo = {
                id: generateReservationId(),
                zone: formInfo.zone || 'A',
                seatId: seatInfo.msg.id,
                custNum: parseInt(formInfo.custNum, 10) || 1,
                timeSlot: parseInt(formInfo.timeSlot, 10) || 1,  
                date
            }
            const { json } = await callApi(RESERVATION_API, {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationInfo)
            })
            if (json) {
                return { status: 0, msg: reservationInfo }
            } else {
                return { status: 2, msg: "connection failed" }
            }
        case 1:
            return { status: 1, msg: "No seats available" }
        default:
            return { status: 2, msg: "connection failed" }
    }
}

export const removeReservationFromDB = async (formInfo) => {
    let {
        cancelBy,
        id,
        seatID,
        date,
        timeSlot
    } = formInfo

    let options = ""
    
    if (!cancelBy || cancelBy === 'ID') {
        options = id
    } else {
        let zone = seatID.charAt(0)
        let seatId = parseInt(seatID.substr(1), 10)
        date = moment(date).startOf('day').unix() * 1000
        timeSlot = parseInt(timeSlot, 10) || 1

        let reservationInfo = await fetchReservation(
            `?zone=${zone}&seatId=${seatId}&date=${date}&timeSlot=${timeSlot}`
        )
        options = reservationInfo[0] ? reservationInfo[0].id : null
    }

    const { json } = await callApi(RESERVATION_INFO.replace(':options', options), {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })
    return json || null
}