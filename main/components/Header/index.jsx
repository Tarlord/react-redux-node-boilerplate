import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreators from '~/main/actions'
import './index.styl'
import superagent from 'superagent'

@connect(state => ({
  flag: state.test.flag
}))

class Header extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			flag: props.flag,
      town: 'Moscow',
      temperature: '',
      wind: ''
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

	onSearch = () => {
	  let { townState } = this.state
	  let town = 'London'
	  superagent
      .get(`/api/call/${town}`)
      .end((err, data) => {
	      console.log(err, data.body)
        this.setState({temperature: '12'})
      })
  }

	render () {
		let { flag } = this.props
		flag = `${flag}`
		return (<div className='Header' onClick={this.onSearch}>
			Header flag - {flag}
		</div>)
	}
}

export default Header
