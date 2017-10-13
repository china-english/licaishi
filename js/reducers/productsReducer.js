import type { Action } from '../actions/types'

export type State = {
  products: Array<Object>,
  CondaryMarketProducts: Array<Object>,
  fixedIncomeProducts: Array<Object>,
  equityProducts: Array<Object>,
  pageNumber: number,
  product:Object,
  hotProducts: Object
}

const initialState = {
  products: [],
  CondaryMarketProducts: [],
  fixedIncomeProducts: [],
  equityProducts: [],
  pageNumber: 1,
  product: null,
  hotProducts: {}
}

export default function (state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INIT_PRODUCTS': {
      return Object.assign({}, state, {
        products: [],
        pageNumber: 1
      })
    }
    case 'INIT_CONDARY_MARKET_PRODUCTS': {
      return Object.assign({}, state, {
        CondaryMarketProducts: [],
        pageNumber: 1
      })
    }
    case 'INIT_FIXED_INCOME_PRODUCTS': {
      return Object.assign({}, state, {
        fixedIncomeProducts: [],
        pageNumber: 1
      })
    }
    case 'INIT_EQUITY_PRODUCTS': {
      return Object.assign({}, state, {
        equityProducts: [],
        pageNumber: 1
      })
    }
    case 'INIT_PRODUCT': {
      return Object.assign({}, state, {
        product: null
      })
    }
    case 'INIT_HOT_PRODUCTS': {
      return Object.assign({}, state, {
        hotProducts: {}
      })
    }
    case 'LOAD_PRODUCTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.products)
      newArray.push(...action.products)
      return Object.assign({}, state, {
        products: newArray,
        pageNumber: action.pageNumber
      })
    }
    case 'LOAD_CONDARY_MARKET_PRODUCTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.CondaryMarketProducts)
      newArray.push(...action.CondaryMarketProducts)
      return Object.assign({}, state, {
        CondaryMarketProducts: newArray,
        pageNumber: action.pageNumber
      })
    }
    case 'LOAD_FIXED_INCOME_PRODUCTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.fixedIncomeProducts)
      newArray.push(...action.fixedIncomeProducts)
      return Object.assign({}, state, {
        fixedIncomeProducts: newArray,
        pageNumber: action.pageNumber
      })
    }
    case 'LOAD_EQUITY_PRODUCTS_SUCCESS': {
      const newArray = []
      newArray.push(...state.equityProducts)
      newArray.push(...action.equityProducts)
      return Object.assign({}, state, {
        equityProducts: newArray,
        pageNumber: action.pageNumber
      })
    }
    case 'LOAD_PRODUCT_SUCCESS': {
      return Object.assign({}, state, {
        product: action.product
      })
    }
    case 'LOAD_HOT_PRODUCTS_SUCCESS': {
      return Object.assign({}, state, {
        hotProducts: action.hotProducts
      })
    }
    default:
      return state
  }
}
