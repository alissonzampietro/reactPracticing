import React from 'react'

class Table extends React.Component {
	constructor() {
		super()
	}

	buildHeader() {
		let el = [];
		for(let position in this.props.head) {
			el.push(<th key={position}>{this.props.head[position]}</th>)
		}
		return el;
	}

	buildBody() {
		let el = [];
		for(let position in this.props.body) {
			el.push(<th key={position}>{this.props.head[position]}</th>)
		}
		return el;
	}



	render() {
		return (
		<table>
			<thead>	
				<tr>
					{this.buildHeader()}
				</tr>
			</thead>
			<tbody>
				<tr>
					{this.buildBody()}
				</tr>
			</tbody>
		</table>
		)
	}
}

export default Table