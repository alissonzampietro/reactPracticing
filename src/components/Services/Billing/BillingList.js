import React from 'react'
import Table from '../../Atoms/Table/'
import Data from './../../../data/data.json'

class BillingList extends React.Component {

	constructor() {
		super()
		let header = Object.keys(Data[1])
		this.state = {
			counter: 1,
			headerTable: header
		}
		this.loadItem = this.loadItem.bind(this)
	}

	loadItem() {
		delete Data[this.state.counter].friends
		this.setState(
			{
				billing: Data[this.state.counter],
				counter: this.state.counter++
			}
		)
	}

	render() {
		return (
			<div>
				<Table header= {this.state.headerTable} body={this.state.billing}/>
				<button onClick={this.loadItem}>Carregar item</button>
			</div>
		)
	}
}

export default BillingList