import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true

  return (
    <div>
      <h1>404</h1>
      <h2>Page not found!</h2>
    </div>
  )
}

export default {
  component: NotFoundPage
}
