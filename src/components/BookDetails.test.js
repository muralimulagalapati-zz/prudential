import React from 'react'
import { shallow } from 'enzyme'

import BookDetails from './BookDetails'

describe('<BookDetails/>', () => {
  let location = { state: {} }
  let match = { params: { id: 1234} }  

  test('If id is null, component should be loading', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: null })
    const loadingtext = wrapper.find('p').text()
    expect(loadingtext).toBe('Loading ...')
  })

  test('title match', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, title: 'amuktamalyada' })
    const titleText = wrapper.find('h3').text()
    expect(titleText).toBe('amuktamalyada')
  })

  test('author match', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, author: 'krishnadevaraya' })
    const authorText = wrapper.find('h4').text()
    expect(authorText).toBe('By krishnadevaraya')
  })

  test('ratings', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234})
    const rating = wrapper.find('StarRatings')
    expect(rating).toHaveLength(1)
  })

  test('raintgsCount match', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, ratingsCount: 567})
    const ratingsCount = wrapper.find('p.ratings').text()
    expect(ratingsCount).toBe('567 ratings')
  })

  test('reviewsCount match', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, reviewsCount: 567})
    const reviewsCount = wrapper.find('p.reviews').text()
    expect(reviewsCount).toBe('567 reviews')
  })

  test('description null: Should render Loading', () => {
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, description: null})
    const descLoading = wrapper.find('p.descloading').text()
    expect(descLoading).toBe('Loading...')
  })

  test('desc less than 300 chars', () => {
    let shortDesc = 'blah'
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, description: shortDesc, showdesc: shortDesc})
    const shortDes = wrapper.find('div.desc')
    const more = wrapper.find('a')
    expect(shortDes).toBe('blah')
    expect(more).toHaveLength(0)
  })

  test('desc more than 300 chars', () => {
    let event = { preventDefault: () => {} }
    let longDesc = `blah blah blah blah blah blah blah blah blah blah
     blah blah blah blah blah blah blah blah blah blah blah blah blah
     blah blah blah blah blah blah blah blah blah blah blah blah blah
     blah blah blah blah blah blah blah blah blah blah blah blah blah
     blah blah blah blah blah blah blah blah blah blah blah blah blah`
    const wrapper = shallow(<BookDetails
      location={location}
      match={match}
    />)
    wrapper.setState({ id: 1234, description: longDesc, showdesc: longDesc.slice(0, 300)})
    console.log(wrapper.state().description.length)

    wrapper.find('a').simulate('click', event)
    expect(wrapper.state('showdesc')).toBe(longDesc)
  })
})