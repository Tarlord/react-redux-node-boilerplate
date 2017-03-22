import React from 'react'
import { render } from 'react-dom'
import 'styles/index.styl'
import { Router, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Routes should be imported after the base styles
import Routes from './Routes'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

function onUpdate () {
	window.scrollTo(0, 0)
}

let router = (
	<Router history={browserHistory} onUpdate={onUpdate}>
		{Routes}
	</Router>
)

let app = document.getElementById('app')
// HACK: make react happy on overrighting server elements
app.innerHTML = ''
render(router, app)