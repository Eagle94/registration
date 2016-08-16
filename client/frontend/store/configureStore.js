import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'
import {redirect} from '../middlewares/redirect'

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, createLogger(), redirect)
    )
    return store
}
