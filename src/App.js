import ReactDOM from 'react-dom'
import React from 'react'
import ContactList from './components/ContactList'
import Data from './data/data.json'

class App extends React.Component {
	componentWillMount() {
		fetch('http://localhost:8080/src/data/data.json').then(data => {
			console.log(data)
		})
	}
	render() {
		return (
			<div>
				<h1>Contact List</h1>
				<ContactList list={Data}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));