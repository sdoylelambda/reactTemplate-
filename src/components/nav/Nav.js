import React from 'react'
import { Route, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>home</Link>
    </div>
  )
}

export default Nav
