import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  VALIDATION_LOGIN_FAIL,
  VALIDATION_REG_FAIL,
  RENDER_REG_COMPONENT,
  RENDER_LOG_COMPONENT
} from '../constants/User'

const initialState = {
  user: null,
  auth: false,
  load: false,
  validation: {
    loginForm: {
      emailStatus: false,
      passStatus: false
    },
    regForm: {
      emailStatus: false,
      passStatus: false,
      nameStatus: false
    }
  }
}

export default function userstate(state = initialState, action) {
  switch (action.type) {
    case RENDER_LOG_COMPONENT:
      return {...state, validation: {
        loginForm: {
          emailStatus: false,
          passStatus: false
        },
        regForm: {
          emailStatus: false,
          passStatus: false,
          nameStatus: false
        }}
      }

      case RENDER_REG_COMPONENT:
        return {...state, validation: {
          loginForm: {
            emailStatus: false,
            passStatus: false
          },
          regForm: {
            emailStatus: false,
            passStatus: false,
            nameStatus: false
          }}
        }

    case VALIDATION_LOGIN_FAIL:
      return {...state, load: false, validation: {
        loginForm: {
          emailStatus: action.payload.emailStatus,
          passStatus: action.payload.passStatus
        },
        regForm: {
          emailStatus: false,
          passStatus: false,
          nameStatus: false
        }}
      }

    case LOGIN_REQUEST:
      return {...state, load: true, validation: {
        loginForm: { emailStatus: false, passStatus: false },
        regForm: { emailStatus: false, passStatus: false, nameStatus: false}}
      }

    case LOGIN_SUCCESS:
      return {...state, load: false, auth: true, user: { name: action.payload.name }}

    case LOGIN_FAIL:
      return {...state, load: false, validation: {
        loginForm: {
          emailStatus: action.payload.emailErr,
          passStatus: action.payload.passErr
        },
        regForm: {
          emailStatus: false,
          passStatus: false,
          nameStatus: false
        }}
      }

    case LOGOUT:
      return {...state, auth: false, user: { name: null }}

    case VALIDATION_REG_FAIL:
      return {...state, load: false, validation: {
        regForm: {
          emailStatus: action.payload.emailStatus,
          passStatus: action.payload.passStatus,
          nameStatus: action.payload.nameStatus
        },
        loginForm: {
          emailStatus: false,
          passStatus: false
        }}
      }

    case REGISTRATION_REQUEST:
      return {...state, load: true, validation: {
        loginForm: { emailStatus: false, passStatus: false },
        regForm: { emailStatus: false, passStatus: false, nameStatus: false}}
      }

    case REGISTRATION_SUCCESS:
      return {...state, load: false, auth: true, user: { name: action.payload.name}}

    case REGISTRATION_FAIL:
      return {...state, load: false, validation: {
        regForm: {
          emailStatus: action.payload.emailErr,
          nameStatus: action.payload.nameErr,
          passStatus: false
        },
        loginForm: {
          emailStatus: false,
          passStatus: false
        }}
      }

    default:
      return state
  }
}
