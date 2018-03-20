import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/header'
import { fetchCurrentUser } from './actions'

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
  component: App
}
