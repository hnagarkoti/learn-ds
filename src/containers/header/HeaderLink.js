import React from 'react';
import { Link } from 'react-router-dom'

const HeaderLink = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/about-us">About</Link>
  </header>
)

export default HeaderLink;
