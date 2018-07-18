import React from 'react'
import BillingList from './../../components/BillingList'
import Data from './../../data/data.json'

class Main extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<main>
				<BillingList item={Data}/>
			</main>
		)
	}
}

export default Main