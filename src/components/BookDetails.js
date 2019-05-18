import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import StarRatings from 'react-star-ratings'

const host = 'https://prudential-helper.herokuapp.com'

class BookDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props.location.state,
      description: null,
      showdesc: null
    }
    this.showMore = this.showMore.bind(this)
  }

  componentDidMount () {
    this.getBookDescription()
  }

  getBookDescription () {
    const { id } = this.props.match.params
    axios.get(`${host}/bookdetails/${id}`)
    .then(response => this.setState({
      ...response.data,
      showdesc: (response.data.description.length > 300
        ? `${response.data.description.slice(0, 300)}`
        : response.data.description)
    }))
    .catch (err => console.error(err))
  }

  showMore (ev) {
    ev.preventDefault()
    this.setState({ showdesc: this.state.description })
  }

  render () {
    const { id, title, author, imageSrc, averageRating,
      reviewsCount, ratingsCount, description, showdesc } = this.state
    return (
      <>
        {
          !id ? <p>Loading ...</p>
          : <div className="row">
            <div className="col-sm-1">
              <img src={imageSrc} alt='cover'/>
            </div>
            <div className="col-sm-4">
              <h3>{title}</h3>
              <h4>By {author}</h4>
              <div className='row'>
                <div className="col-sm-5">
                  <StarRatings
                    rating={parseFloat(averageRating) || 0.0}
                    starDimension="20px"
                    starSpacing="0px"
                    starRatedColor='orange'
                  />
                </div>
                <p className="col-sm-3">{ratingsCount} ratings</p>
                <p className="col-sm-3">{reviewsCount} reviews</p>
              </div>
              {
                description !== null
                ? <div>
                    <div>{ReactHtmlParser(showdesc)}
                      {
                        (description.length > 300
                          && description !== showdesc)
                        ? <a href='' onClick={this.showMore}>(more)</a>
                        : null
                      }
                    </div>
                  </div>
                : <p>Loading...</p>
              }
            </div>
          </div>
        }
      </>
    )
  }
}

export default BookDetails
