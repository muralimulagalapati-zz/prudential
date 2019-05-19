import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const host = 'https://prudential-helper.herokuapp.com'

export default class BookStore extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      results: [],
      loading: false
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onSearchChange (ev) {
    const search = ev.target.value
    this.setState({ search })
  }

  handleSubmit (ev) {
    ev.preventDefault()
    this.setState({ loading: true })
    this.getBooksData(this.state.search)
  }

  getBooksData (query) {
    axios.get(`${host}/search?q=${query}`)
    .then(response => this.setState({ results: response.data, loading: false }))
    .catch(err => console.error(err))
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='row'>
          <input
            type='text'
            placeholder='Search Books'
            value={this.state.search}
            onChange={this.onSearchChange}
            className='col-sm-3'
          />
          <button className='btn btn-primary col-sm-1'>Search</button>
        </form>
        <ul className='list-unstyled'>
          {
            this.state.loading
            ? <p>Loading ...</p>
            : this.state.results.map(result => (
              <li key={result.key}>
                <Link to={{
                  pathname: `/books/${result.id}`,
                  state: result
                }}>{result.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
