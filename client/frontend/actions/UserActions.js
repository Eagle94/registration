import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  VALIDATION_LOGIN_FAIL,
  VALIDATION_REG_FAIL,
  RENDER_LOG_COMPONENT,
  RENDER_REG_COMPONENT
} from '../constants/User'

import {
  ROUTING
} from '../constants/Routing'

import {
  validateLoginForm,
  validateRegistrationForm,
  authService,
  registrationService
} from '../services/UserServices'

export function renderLogComponent() {
  return (dispatch) => {
    dispatch({
      type: RENDER_LOG_COMPONENT
    })
  }
}

export function renderRegComponent() {
  return (dispatch) => {
    dispatch({
      type: RENDER_REG_COMPONENT
    })
  }
}

export function login(email, pass) {
  return (dispatch) => {
    validateLoginForm(email, pass)
    .then( data => {
      dispatch({
        type: VALIDATION_LOGIN_FAIL,
        payload: {
          emailStatus: data.emailStatus,
          passStatus: data.passStatus
        }
      })
    })
    .catch( res => {
      dispatch({
        type: LOGIN_REQUEST
      })
      authService(res.email, res.password)
      .then( data => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data
        })
        dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/home'
          }
        })
      })
      .catch( err => {
        err.then( data => {
          dispatch({
            type: LOGIN_FAIL,
            payload: data
          })
        })
      })
    })
  }
}

export function logout(){
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}

export function registration(email, name, password, secondPassword) {
  return dispatch => {
    validateRegistrationForm(email, name, password, secondPassword)
    .then( data => {
      dispatch({
        type: VALIDATION_REG_FAIL,
        payload: {
          emailStatus: data.emailStatus,
          passStatus: data.passStatus,
          nameStatus: data.usernameStatus
        }
      })
    })
    .catch( res => {
      dispatch({
        type: REGISTRATION_REQUEST
      })
      registrationService(res.email, res.name, res.password)
      .then( data => {
        dispatch({
          type: REGISTRATION_SUCCESS,
          payload: data
        })
        dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/home'
          }
        })
      })
      .catch( err => {
        err.then( data => {
          dispatch({
            type: REGISTRATION_FAIL,
            payload: data
          })
        })
      })
    })
  }
}
