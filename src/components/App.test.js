import React from 'react'
import { shallow } from 'enzyme'

import App from '../components/App'
import BookStore from '../components/BookStore'

describe('<App />', () => {
  test('Expects it to have BookStore', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(BookStore)).toHaveLength(1)
  })
})
