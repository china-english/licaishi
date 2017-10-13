import type { Action } from '../actions/types'

export type State = {
  summary: Object,
  mySummary: Object,
  personalInfo: Object
}

const initialState = {
  personalInfo: null,
  summary: null,
  mySummary: null
}

export default function (state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INIT_PERSONAL_SUCCESS': {
      return Object.assign({}, state, {
        personalInfo: null
      })
    }
    case 'INIT_SUMMARY_SUCCESS': {
      return Object.assign({}, state, {
        summary: null
      })
    }
    case 'INIT_MY_SUMMARY': {
      return Object.assign({}, state, {
        mySummary: null
      })
    }
    case 'LOAD_USER_INFO_SUCCESS': {
      return Object.assign({}, state, {
        personalInfo: action.personal
      })
    }
    case 'LOAD_SUMMARY_SUCCESS': {
      return Object.assign({}, state, {
        summary: action.summary
      })
    }
    case 'LOAD_MY_SUMMARY_SUCCESS': {
      return Object.assign({}, state, {
        mySummary: action.mySummary
      })
    }
    default:
      return state
  }
}
