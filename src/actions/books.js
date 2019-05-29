import fetch from 'cross-fetch'

const host = 'https://prudential-helper.herokuapp.com'

export const requestBooks = (searchTerm) => ({
  type: 'REQUEST_BOOKS',
  searchTerm
})

export const recieveBooks = (searchTerm, json) => ({
  type: 'RECIEVE_BOOKS',
  searchTerm,
  results: json
})

export const fetchBooks = (searchTerm) => (
  (dispatch) => {
    dispatch(requestBooks(searchTerm))
    return fetch(`${host}/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(json => dispatch(recieveBooks(searchTerm, json)))
      .catch(err => {
        console.error(err)
        return dispatch(recieveBooks(searchTerm, []))
      })
  }
)

export const shouldFetchBooks = (state) => {
  if (!state.books.length) {
    return true
  } else if (state.isFetchingBooks) {
    return false
  } else {
    return true
  }
}

export const fetchBooksIfNeeded = (searchTerm) => (
  (dispatch, getState) => {
    if (shouldFetchBooks(getState())) {
      dispatch(fetchBooks(searchTerm))
    }
  }
)

export const requestBookDetails = (bookId) => ({
  type: 'REQUEST_BOOKDETAILS',
  bookId
})

export const recieveBookDetails = (bookId, json) => ({
  type: 'RECIEVE_BOOKDETAILS',
  bookId,
  results: json
})

export const fetchBookDetails = (bookId) => (
  (dispatch) => {
    dispatch(requestBookDetails(bookId))
    return fetch(`${host}/bookdetails/${bookId}`)
      .then(response => response.json())
      .then(json => dispatch(recieveBookDetails(bookId, json)))
      .catch(err => {
        console.error(err)
        return dispatch(recieveBookDetails(bookId, {}))
      })
  }
)

export const shouldFetchBookDetails = (state, bookId) => {
  if (!state.books[bookId] || state.books[bookId].details) {
    return true
  } else if (state.isFetchingBookDetails) {
    return false
  } else {
    return true
  }
}

export const fetchBookDetailsIfNeeded = (bookId) => (
  (dispatch, getState) => {
    if (shouldFetchBookDetails(getState(), bookId)) {
      dispatch(fetchBookDetails(bookId))
    }
  }
)
