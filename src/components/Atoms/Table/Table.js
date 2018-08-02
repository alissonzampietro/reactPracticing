import React from 'react'

class Table extends React.Component {
	constructor() {
		super()
		this.state = {
			body: [],
			header:[],
			lastInsertedId: 0,
			haveHeader: false
		}

		this.teste = []
	}
	componentDidUpdate() {
			let obj = {}
			if(this.state.lastInsertedId != this.props.body._id && this.props.body != '') {
				obj.lastInsertedId = this.props.body._id
				obj.body = Object.values(this.props.body)
				if(!this.state.haveHeader) {
					obj.header = this.props.header
				}
				this.setState(obj);
			}
	}

	render() {
		console.log(this.state)
		return (
		<table>
			<thead>	
				<tr>
					{this.state.header.map((item,key) => <td key={key}>{item}</td>)}
				</tr>
			</thead>
			<tbody>
				<tr>
					{this.state.body.map((item,key) => <td key={key}>{item}</td>)}
				</tr>
			</tbody>
		</table>
		)
	}
}

export default Table