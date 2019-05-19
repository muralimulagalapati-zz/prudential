import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
  test('Expect it to have NavLink', () => {
    const wrapper = shallow(<Header/>)
    const h1Text = wrapper.find('h1').text()
    expect(h1Text).toBe('Book Store')
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })
})