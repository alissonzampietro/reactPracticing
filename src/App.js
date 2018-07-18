import ReactDOM from 'react-dom'
import React from 'react'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

class App extends React.Component {
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