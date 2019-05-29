import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBookDetailsIfNeeded } from '../actions/books'

const BookList = (props) => {
  const handleSumit = (id) => {
    props.dispatch(fetchBookDetailsIfNeeded(id))
    props.history.push(`/books/${id}`)
  }

  return (
    <ul className='list-unstyled'>
      {
        props.isFetchingBooks
        ? <p>Loading ...</p>
        : props.books.map(result => (
          <li key={result.key}>
            <div
              onClick={handleSumit.bind(null, result.id)}
              style={{cursor: 'pointer'}}
            >{result.title}</div>
          </li>
        ))
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {...state.books}
}

export default connect(mapStateToProps)(withRouter(BookList))
