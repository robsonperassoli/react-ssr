import React from 'react'
import { Route } from 'react-router-dom'
import App from './app'
import NotFoundPage from './pages/not-found-page'
import HomePage from './pages/home-page'
import UsersListPage from './pages/users-list-page'
import AdminsListPage from './pages/admins-list-page'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
