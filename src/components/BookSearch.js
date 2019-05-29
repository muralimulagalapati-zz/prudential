import React from 'react'
import { connect } from 'react-redux'
import { fetchBooksIfNeeded } from '../actions/books'

export const BookSearch = (props) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const fd = new FormData(ev.target)
    let searchterm
    for (const [key, value] of fd.entries()) {
      (key === 'searchterm') && (searchterm = value)
    }
    props.dispatch(fetchBooksIfNeeded(searchterm))
  }

  return (
    <form onSubmit={handleSubmit} className='row'>
      <label htmlFor='search'>Enter your search</label>
      <input
        type='text'
        name='searchterm'
        className='col-sm-3'
      />
      <button className='btn btn-primary col-sm-1'>Search</button>
    </form>
  )
}

export default connect()(BookSearch)
