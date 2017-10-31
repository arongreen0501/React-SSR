import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../actions'

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    const { users } = this.props
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(Users)
}
