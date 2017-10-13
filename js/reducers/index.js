
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from './authReducer'
import clients from './clientsReducer'
import products from './productsReducer'
import drawer from './drawer'
import user from './user'
import list from './list'
import personal from './personalReducer'
import bookings from './bookingsReducer'
import contracts from './contractsReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

export default combineReducers({
  auth,
  clients,
  drawer,
  user,
  products,
  list,
  personal,
  bookings,
  contracts,
  ajaxCallsInProgress,
  form
})
