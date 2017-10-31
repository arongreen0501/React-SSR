import React from 'react'
import App from './App'
import Home from './pages/Home'
import Users from './pages/Users'
import Admins from './pages/Admins'
import NotFound from './pages/NotFound'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...Admins,
        path: '/admins'
      },
      {
        ...Users,
        path: '/users'
      },
      {
        ...NotFound
      }
    ]
  }
]
