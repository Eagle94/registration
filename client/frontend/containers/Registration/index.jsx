import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../../actions/UserActions'

import './registration.scss'

export default class Registration extends Component {

  componentWillMount() {
    this.props.actions.renderRegComponent();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, secondPassword } = this.refs;
    this.props.actions.registration(email.value, name.value, password.value, secondPassword.value);
  }

  render() {

    const { emailStatus, passStatus, nameStatus } = this.props.validation;

    return (
      <div className='registration'>
        <h1>Регистрация</h1>
        <form className="form-horizontal" onSubmit={::this.handleSubmit}>
          <div className={"form-group" + (nameStatus ? " has-error" : "")}>
            <label className='col-lg-2 control-label' htmlFor='name'>Name</label>
            <div className='col-lg-10'>
              <input ref="name" type='text' className='form-control' id='name' placeholder='Name'/>
              <p className={"help-block" + (nameStatus ? "" : " none")}>{nameStatus}</p>
            </div>
          </div>
          <div className={"form-group" + (emailStatus ? " has-error" : "")}>
            <label className='col-lg-2 control-label' htmlFor='email'>Email</label>
            <div className='col-lg-10'>
              <input ref="email" type='text' className='form-control' id='email' placeholder='email'/>
              <p className={"help-block" + (emailStatus ? "" : " none")}>{emailStatus}</p>
            </div>
          </div>
          <div className={"form-group" + (passStatus ? " has-error" : "")}>
            <label className='col-lg-2 control-label' htmlFor='password'>Password</label>
            <div className='col-lg-10'>
              <input ref="password" type='password' className='form-control' id='password' placeholder='password'/>
              <p className={"help-block" + (passStatus ? "" : " none")}>{passStatus}</p>
            </div>
          </div>
          <div className={"form-group" + (passStatus ? " has-error" : "")}>
            <label className='col-lg-2 control-label' htmlFor='password'>Password</label>
            <div className='col-lg-10'>
              <input ref="secondPassword" type='password' className='form-control' id='password' placeholder='password'/>
              <p className={"help-block" + (passStatus ? "" : " none")}>{passStatus}</p>
            </div>
          </div>
          <button type="submit" className="btn btn-default">Зарегистрироваться</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    validation: state.user.validation.regForm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Registration)
