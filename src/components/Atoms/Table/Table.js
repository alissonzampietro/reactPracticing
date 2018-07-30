import React from 'react'

class Table extends React.Component {
	constructor() {
		super()
		this.state = {
			body: [],
			header:[]
		}
	}

	componentDidUpdate() {
			let item = []
			this.props.body.map(data => {
				this.setState({body: item})
				item.push(data[1])
			})
	}

	render() {
		return (
		<table>
			<thead>	
				<tr>
					{this.state.header}
				</tr>
			</thead>
			<tbody>
				<tr>
					{this.state.body.map(data => {<td>${data}</td>})}
				</tr>
			</tbody>
		</table>
		)
	}
}

export default Table