import React from 'react'
import Table from '../../Atoms/Table/'
import Data from './../../../data/data.json'

class BillingList extends React.Component {

	constructor() {
		super()
		this.state = {
			counter: 1
		}
		this.loadItem = this.loadItem.bind(this)
	}

	loadItem() {
		this.setState(
			{
				billing: Object.entries(Data[this.state.counter]),
				counter: this.state.counter++
			}
		)
	}

	render() {
		return (
			<div>
				<Table body={this.state.billing}/>
				<button onClick={this.loadItem}>Carregar item</button>
			</div>
		)
	}
}

export default BillingList