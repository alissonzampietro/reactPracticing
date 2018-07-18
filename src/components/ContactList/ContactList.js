import React from 'react';

class ContactList extends React.Component {
	constructor() {
		super()
	}
	componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (
			<ul>
				<li>1 item</li>
				<li>2 item</li>
				<li>3 item</li>
				<li>4 item</li>
			</ul>
		)
	}
}

export default ContactList