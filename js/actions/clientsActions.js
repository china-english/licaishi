'use strict'

// import fetch from 'isomorphic-fetch'
import 'fetch-everywhere'
import { SERVER_URL } from '../constants/config'
import { checkHttpStatus, parseJSON } from '../businessLogic/utils'

import type { Action } from './types'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import type { loadFailure } from './commonActions'
import { totalInOnePage, maxPageSize } from '../constants/numbers'

export const initClients = (): Action => {
  return {type: 'INIT_CLIENTS_SUCCESS'}
}

export const initApplicableClients = (): Action => {
  return {type: 'INIT_APPLICABLE_CLIENTS'}
}

export const loadClientsSuccess = (clients: Array<Object>, pageNumber: number): Action => {
  return {type: 'LOAD_CLIENTS_SUCCESS', clients, pageNumber}
}

export const loadClients = (pageNumber = 1, customerName = '', pageSize = totalInOnePage): Action => {
  return (dispatch, getState) => {
    if (pageNumber === 1) {
      dispatch(initClients())
    }
    dispatch(beginAjaxCall())
    return fetch(`${SERVER_URL}/customer/query`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        customerName,
        pageSize,
        pageNumber
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        if (response.data === null) {
          return Promise.reject(response)
        }
        if (response.data.records.length === 0) {
          pageNumber = pageNumber - 1
        }
        dispatch(loadClientsSuccess(response.data.records, pageNumber))
        return Promise.resolve(response.data.records)
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return Promise.reject(error)
      })
  }
}

export const loadClientSuccess = (client: ?Object): Action => {
  return {type: 'LOAD_CLIENT_SUCCESS', client}
}

export const loadClient = (customerId: string): Action => {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall())
    return fetch(`${SERVER_URL}/customer/get`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        customerId
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        if (response.data === null) {
          dispatch(ajaxCallError(response))
          return Promise.reject(response)
        }
        dispatch(loadClientSuccess(response.data))
        return Promise.resolve(response.data)
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return Promise.reject(error)
      })
  }
}

export const initClientVisitRecordsSuccess = (): Action => {
  return {type: 'INIT_CLIENT_VISIT_RECORDS_SUCCESS'}
}

export const loadClientVisitRecordsSuccess = (visitRecords: ?Object, visitRecordsPageNumber: number): Action => {
  return {type: 'LOAD_CLIENT_VISIT_RECORDS_SUCCESS', visitRecords, visitRecordsPageNumber}
}

export const loadClientVisitRecords = (customerId: string, pageNumber: number = 1, pageSize: number = totalInOnePage): Action => {
  return (dispatch, getState) => {
    if (pageNumber === 1) {
      dispatch(initClientVisitRecordsSuccess())
    }
    console.log(customerId, pageNumber)
    dispatch(beginAjaxCall())
    fetch(`${SERVER_URL}/visit/query`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        customerId,
        pageSize,
        pageNumber
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        console.log(response)
        if (response.data === null) {
          return Promise.reject(response)
        }
        if (response.data.records.length === 0) {
          pageNumber = pageNumber - 1
        }
        dispatch(loadClientVisitRecordsSuccess(response.data.records, pageNumber))
        return Promise.resolve(response.data.records)
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return Promise.reject(error)
      })
  }
}

export const initClientBookingRecordsSuccess = (): Action => {
  return {type: 'INIT_CLIENT_BOOKING_RECORDS_SUCCESS'}
}

export const loadClientBookingRecordsSuccess = (bookingRecords: ?Object, bookingRecordsPageNumber: number): Action => {
  return {type: 'LOAD_CLIENT_BOOKING_RECORDS_SUCCESS', bookingRecords, bookingRecordsPageNumber}
}

export const loadClientBookingRecords = (customerId: string, pageNumber: number = 1, pageSize: number = totalInOnePage): Action => {
  return (dispatch, getState) => {
    if (pageNumber === 1) {
      dispatch(initClientBookingRecordsSuccess())
    }
    dispatch(beginAjaxCall())
    return fetch(`${SERVER_URL}/booking/query`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        customerId,
        pageSize,
        pageNumber
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        if (response.data === null) {
          return Promise.reject(response)
        }
        if (response.data.records.length === 0) {
          pageNumber = pageNumber - 1
        }
        dispatch(loadClientBookingRecordsSuccess(response.data.records, pageNumber))
        return Promise.resolve(response.data.records)
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return Promise.reject(error)
      })
  }
}

export const selectedClientSuccess = (selectedClient: Object): Action => {
  return {type: 'SELECTED_CLIENT_SUCCESS', selectedClient}
}

export const selectedClient = (clientId): Action => {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall())
    return fetch(`${SERVER_URL}/customer/get`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        customerId: clientId
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(selectedClientSuccess(response.data))
        return response.data
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return error
      })
  }
}

export const loadApplicableClientsSuccess = (applicableClients: Array<Object>, totalRecordCount: number): Action => {
  return {type: 'LOAD_APPLICABLE_CLIENT_SUCCESS', applicableClients, totalRecordCount}
}

// 适用客户
export const loadApplicableClients = (productId, pageSize = maxPageSize): Action => {
  return (dispatch, getState) => {
    dispatch(initApplicableClients())
    dispatch(beginAjaxCall())
    return fetch(`${SERVER_URL}/customer/available`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${getState().auth.token}`
      },
      body: JSON.stringify({
        productId,
        pageSize
      })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        console.log(response.data)
        dispatch(loadApplicableClientsSuccess(response.data.records, response.data.totalRecordCount))
        return response.data
      })
      .catch(error => {
        console.log(error)
        dispatch(ajaxCallError(error))
        return error
      })
  }
}
