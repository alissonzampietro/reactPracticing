import React from 'react'
import Table from '../../Atoms/Table/'

class BillingList extends React.Component {

	constructor() {
		super()
		this.state = {
			titles: ['Item','Price']
		}
	}

	componentWillUpdate() {

	}

	render() {
		return (
			<Table head={this.state.titles} />
		)
	}
}

export default BillingList