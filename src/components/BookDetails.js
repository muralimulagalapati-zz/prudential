import React from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import StarRatings from 'react-star-ratings'

const BookDetails = (props) => {
  const { id, title, author, imageSrc, averageRating,
    reviewsCount, ratingsCount, description } = props.bookDetails
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
              <p className="col-sm-3 ratings">{ratingsCount} ratings</p>
              <p className="col-sm-3 reviews">{reviewsCount} reviews</p>
            </div>
            {
              !props.isFetchingBookDetails
              ? <div>
                  <div className='desc'>{ReactHtmlParser(description)}
                  </div>
                </div>
              : <p className='descloading'>Loading...</p>
            }
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    isFetchingBookDetails: state.bookDetails.isFetchingBookDetails,
    bookid: props.match.params.id,
    bookDetails: {
      ...state.books.books.find(book => book.id === props.match.params.id),
      description: state.bookDetails.bookDetails ? state.bookDetails.bookDetails.description : null
    }
  }
}

export default connect(mapStateToProps)(BookDetails)
