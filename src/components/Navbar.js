import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center" >

  <h3 style={{color:"Red"}}><i>Text Case Converter</i></h3>
  
</nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string
}