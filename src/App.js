import ReactDOM from 'react-dom'
import React from 'react'
import ContactList from './components/ContactList'
import Data from './data/data.json'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

class App extends React.Component {
	componentWillMount() {
		fetch('http://localhost:8080/src/data/data.json').then(data => {
			console.log(data)
		})
	}
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));