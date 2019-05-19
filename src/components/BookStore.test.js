import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link } from 'react-router-dom'

import BookStore from './BookStore'

describe('<BookStore />', () => {
  test('search box changes text', () => {
    const wrapper = shallow(<BookStore />);
    const searchBox = wrapper.find('input.col-sm-3')
    searchBox.simulate('change', { target: { value: "kalidasa" }})
    expect(wrapper.state('search')).toBe('kalidasa')
  })

  test('On submit getbooksdata is called', () => {
    const wrapper = mount(<BookStore />);
    const spy = jest.spyOn(wrapper.instance(), 'getBooksData')
    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault: () => {}})
    expect(spy).toBeCalled()
  })

  test('title compare', () => {
    const wrapper = shallow(<BookStore />);
    wrapper.setState({results: [{key: 1, id: 1, title: 'Kalidasa'}]})
    const linkText = wrapper.find(Link).props().children
    expect(linkText).toBe('Kalidasa')
  })
})