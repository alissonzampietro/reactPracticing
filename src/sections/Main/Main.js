import React from 'react'
import BillingList from './../../components/Services/Billing'
import Data from './../../data/data.json'

class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			billing: {},
			counter: 0
		}

		this.loadItem = this.loadItem.bind(this)
	}

	componenWillUpdate() {
		console.log(this.state.counter++)
	}

	loadItem() {
		this.setState(
			{
				billing: Data[this.state.counter],
				counter: this.state.counter++
			}
		)
	}

	render() {
		return (
			<main>
				<BillingList item={this.state.billing}/>
				<button onClick={this.loadItem}>Carregar item</button>
			</main>
		)
	}
}

export default Main