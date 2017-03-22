import React from 'react'
import './index.styl'
import Header from '~/main/components/Header'


class Home extends React.Component {

	render () {
		let { store } = this.props.route
		return <div className='Home'>
			<Header store={store} />
			Home Page
		</div>
	}
}

export default Home