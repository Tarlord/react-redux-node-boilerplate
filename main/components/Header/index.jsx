import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreators from '~/main/actions'
import './index.styl'

@connect(state => ({
  flag: state.test.flag
}))

class Header extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			flag: props.flag
		}
	}

	componentWillReceiveProps (nextProps, nextState) {
		let { flag } = nextProps
		this.setState({flag})
	}

	toggle = () => {
		let { dispatch } = this.props
		dispatch(ActionCreators.toggle())
	}

	render () {
		let { flag } = this.state
		flag = `${flag}`
		return (<div className='Header' onClick={this.toggle}>
			Header flag - {flag}
		</div>)
	}
}

export default Header
