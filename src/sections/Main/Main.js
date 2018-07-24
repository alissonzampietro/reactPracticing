import React from 'react'
import BillingList from './../../components/Services/Billing'
import Data from './../../data/data.json'

class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			billing: {}
		}
	}

	loadItem = () => {
		this.setState({billing: 2})
	}
	render() {
		return (
			<main>
				<BillingList item={this.state.billing}/>
				<button onClick={this.loadItem()}>Carregar item</button>
			</main>
		)
	}
}

export default Main