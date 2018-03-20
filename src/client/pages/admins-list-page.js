import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsList extends Component {
  componentDidMount () {
    this.props.fetchAdmins();
  }

  renderAdmins () {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  render () {
    return (
      <div>
        Admins List:
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins }
}

const loadData = (store) => {
  return store.dispatch(fetchAdmins())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsList)
  )
}
