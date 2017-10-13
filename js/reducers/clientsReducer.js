import type { Action } from '../actions/types'

export type State = {
  clients: Array<Object>,
  pageNumber: number,
  selectedClient: ?Object,
  visitRecords: Object[],
  visitRecordsPageNumber: number,
  bookingRecords: Object[],
  bookingRecordsPageNumber: number,
  applicableClients: Array<Object>,
  applicableClientsNumber: number
}

const initialState = {
  clients: [],
  pageNumber: 0,
  selectedClient: null,
  visitRecords: [],
  visitRecordsPageNumber: 0,
  bookingRecords: [],
  bookingRecordsPageNumber: 0,
  applicableClients: [],
  applicableClientsNumber: 0
}

export default function (state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INIT_CLIENTS_SUCCESS': {
      return Object.assign({}, state, {
        clients: [],
        pageNumber: 0,
        selectedClient: null,
        visitRecords: [],
        visitRecordsPageNumber: 0,
        bookingRecords: [],
        bookingRecordsPageNumber: 0
      })
    }
    case 'LOAD_CLIENTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.clients)
      newArray.push(...action.clients)
      return Object.assign({}, state, {
        clients: newArray,
        pageNumber: action.pageNumber
      })
    }
    case 'LOAD_CLIENT_SUCCESS': {
      return Object.assign({}, state, {
        selectedClient: action.client,
        visitRecords: [],
        visitRecordsPageNumber: 0,
        bookingRecords: [],
        bookingRecordsPageNumber: 0
      })
    }
    case 'INIT_CLIENT_VISIT_RECORDS_SUCCESS': {
      return Object.assign({}, state, {
        visitRecords: [],
        visitRecordsPageNumber: 0
      })
    }
    case 'LOAD_CLIENT_VISIT_RECORDS_SUCCESS': {
      const newArray = []
      newArray.push(...state.visitRecords)
      newArray.push(...action.visitRecords)
      return Object.assign({}, state, {
        visitRecords: newArray,
        visitRecordsPageNumber: action.visitRecordsPageNumber
      })
    }
    case 'INIT_CLIENT_BOOKING_RECORDS_SUCCESS': {
      return Object.assign({}, state, {
        bookingRecords: [],
        bookingRecordsPageNumber: 0
      })
    }
    case 'LOAD_CLIENT_BOOKING_RECORDS_SUCCESS': {
      const newArray = []
      newArray.push(...state.bookingRecords)
      newArray.push(...action.bookingRecords)
      return Object.assign({}, state, {
        bookingRecords: newArray,
        bookingRecordsPageNumber: action.bookingRecordsPageNumber
      })
    }
    case 'SELECTED_CLIENT_SUCCESS': {
      return Object.assign({}, state, {
        selectedClient: action.selectedClient
      })
    }
    case 'INIT_APPLICABLE_CLIENTS': {
      return Object.assign({}, state, {
        applicableClients: [],
        applicableClientsNumber: 0
      })
    }
    case 'LOAD_APPLICABLE_CLIENT_SUCCESS': {
      return Object.assign({}, state, {
        applicableClients: action.applicableClients,
        applicableClientsNumber: action.totalRecordCount
      })
    }
    default:
      return state
  }
}
