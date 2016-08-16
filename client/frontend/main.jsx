import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {routes} from './routes/routes'

import './assets/styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)
