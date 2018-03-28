import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import HeaderLink from './HeaderLink'
// import SearchBarItem from './SearchBar';

export default () => (
  <AppBar
    title="My AppBar"
    showMenuIconButton={true}
    iconElementRight={<HeaderLink />}
  />
)
