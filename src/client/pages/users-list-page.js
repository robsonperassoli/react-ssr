import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  renderUsers () {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  head () {
    return (
      <Helmet>
        <title>{`Users App :: Users List (${this.props.users.length})`}</title>
        <meta property='og:title' content='Users App :: Users List' />
      </Helmet>
    )
  }

  render () {
    return (
      <div>
        {this.head()}
        Users List:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { users }
}

const loadData = (store) => {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
