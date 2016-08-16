import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../../actions/UserActions'

import './header.scss'

export default class Header extends Component {
  handleOnClick(e) {
    this.props.actions.logout();
  }
  render() {
    const { user } = this.props;
    return (
      <header>
        <ul className='nav nav-pills navbar-right'>
          <li className={user.auth ? " none" : ""}><Link to='/login'>Логин</Link></li>
          <li className={user.auth ? " none" : ""}><Link to='/registration'>Регистрация</Link></li>
          <li className={user.auth ? "" : " none"} onClick={::this.handleOnClick}><Link to='/'>Выйти</Link></li>
        </ul>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Header)
