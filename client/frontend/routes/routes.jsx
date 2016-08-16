import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../containers/App'
import Authorization from '../containers/Authorization'
import Registration from '../containers/Registration'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Authorization}/>
            <Route path='login' component={Authorization}/>
            <Route path='registration' component={Registration}/>
            <Route path='home' component={Home}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
)
