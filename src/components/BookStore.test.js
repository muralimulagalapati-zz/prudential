import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BookStore from './BookStore'

describe('<BookStore />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<BookStore />);
  })
  test('search box changes text', () => {
    // const wrapper = shallow(<BookStore />);
    const searchBox = wrapper.find('input.col-sm-3')
    searchBox.simulate('change', { target: { value: "kalidasa" }})
    expect(wrapper.state('search')).toBe('kalidasa')
  })

  test('On submit getbooksdata is called', () => {
    // const wrapper = mount(<BookStore />);
    wrapper.instance()['getBooksData'] = jest.fn().mockImplementation(() => {})
    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault: () => {}})
    expect(wrapper.instance()['getBooksData']).toBeCalled()
  })

  test('On get data', () => {
    // const wrapper = mount(<BookStore />);
    axios['get'] = jest.fn().mockImplementation(() => ({response: {data: {}}}))
    expect(wrapper.state('loding')).toBeFalsy()
  })

  test('title compare', () => {
    // const wrapper = shallow(<BookStore />);
    wrapper.setState({results: [{key: 1, id: 1, title: 'Kalidasa'}]})
    const linkText = wrapper.find(Link).props().children
    expect(linkText).toBe('Kalidasa')
  })
})