import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="row">
    <h1 className="col-sm-6 text-center">Book Store</h1>
    <NavLink to="/">Search</NavLink>
  </header>
)

export default Header
