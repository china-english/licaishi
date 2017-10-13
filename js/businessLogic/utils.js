// @flow
import { amountConverted, unitConversion } from '../constants/numbers'
import {units} from '../constants/optionsValues'

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]

    return reducer
      ? reducer(state, action.payload)
      : state
  }
}

export function checkHttpStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  console.log(error)
  error.response = response
  throw error
}

export function parseJSON (response) {
  return response.json()
}

export const setParam = (paramString, param) => (param === '') ? '' : `${paramString}=${param}`

export const optionsArrayToObject = (arr: Object[]) => arr.reduce((result, item) => {
  result[item['value']] = item['name']
  return result
}, {})

export const convertDateToString = (date) => {
  const tempDate = new Date(date)
  return `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`
}

export const convertTwoDateTimesToOneString = (startDateTime, endDateTime) => {
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)
  return `${start.getFullYear()}-${start.getUTCMonth()}-${start.getDate()}\
  ${start.toLocaleTimeString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false
  })}-${end.toLocaleTimeString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false
  })}`
}

export const convertDateTimeToString = (dateTime) => {
  const tempDate = new Date(dateTime)
  return `${tempDate.getFullYear()}-${tempDate.getUTCMonth()}-${tempDate.getDate()}  ${getHours(tempDate.getHours())}:${getMinutes(tempDate.getMinutes())}:${getSeconds(tempDate.getSeconds())}`
}

const getHours = (hours) => {
  return hours >= 10 ? hours : `0${hours}`
}

const getMinutes = (minutes) => {
  return minutes >= 10 ? minutes : `0${minutes}`
}

const getSeconds = (seconds) => {
  return seconds >= 10 ? seconds : `0${seconds}`
}

export const convertMoneyToString = (money) => {
  let index = 0
  while (Math.round(money) >= amountConverted) {
    index = index + 1
    money = money / amountConverted
  }
  index = money >= unitConversion ? index + 1 : index
  money = money >= unitConversion ? money / amountConverted : money
  if (Math.round(money) === money) {
    return `${money}${optionsArrayToObject(units)[index.toString()]}`
  } else {
    return `${money.toFixed(2)}${optionsArrayToObject(units)[index.toString()]}`
  }
}
