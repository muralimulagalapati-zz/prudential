import { combineReducers } from 'redux'

function books(state = {
  isFetchingBooks: false,
  books: []
}, action) {
  switch(action.type) {
    case 'REQUEST_BOOKS':
      return {
        ...state,
        isFetchingBooks: true
      }
    case 'RECIEVE_BOOKS':
      return {
        ...state,
        isFetchingBooks: false,
        books: action.results
      }
    default:
      return state
  }
}

function bookDetails(state = {
  isFetchingBookDetails: false,
  bookDetails: null
}, action) {
  switch(action.type) {
    case 'REQUEST_BOOKDETAILS':
      return {
        ...state,
        isFetchingBookDetails: true
      }
    case 'RECIEVE_BOOKDETAILS':
      return {
        ...state,
        isFetchingBookDetails: false,
        bookDetails: action.results 
      }
    default:
      return state
  }
}

export default combineReducers({
  books,
  bookDetails
})
