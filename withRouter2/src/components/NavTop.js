
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Nav from './Nav1'

const MyNav = withRouter(Nav);

const NavTop = () => (
  <Router>
    <div>
      <MyNav/>
    </div>
  </Router>
)

export default NavTop
