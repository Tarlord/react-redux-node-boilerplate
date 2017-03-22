import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import cookie from 'react-cookie'

import * as reducers from './reducers'
import promiseMiddleware from './promiseMiddleware'

import Root from './Root.jsx'
import Home from './pages/Home'

const reducer = combineReducers(reducers)
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

export default (
	<Router history={browserHistory}>
		<Route path='/' component={Root}>
			<Provider store={store}>
				<Route path='/home' component={Home} store={store} />
			</Provider>
			<IndexRedirect to='/home' />
		</Route>
	</Router>
)
