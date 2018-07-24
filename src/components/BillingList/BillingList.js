import React from 'react';

class BillingList extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
					{this.props.item.map((data,num) => { return <tr key={num} style={{backgroundColor: data.color}}><td>{data.name}</td><td>{data.balance}</td></tr>})}
				</tbody>
			</table>
		)
	}
}

export default BillingList