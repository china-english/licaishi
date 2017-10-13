import type { Action } from '../actions/types'

export type State = {
  contracts: Array<Object>
}

const initialState = {
  contracts: []
}

export default function (state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INIT_CONTRACTS_SUCCESS': {
      return Object.assign({}, state, {
        contracts: []
      })
    }
    case 'LOAD_CONTRACTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.contracts)
      newArray.push(...action.contracts)
      return Object.assign({}, state, {
        contracts: newArray,
        totalRecordCount: action.totalRecordCount,
        pageNumber: action.pageNumber
      })
    }
    default:
      return state
  }
}
