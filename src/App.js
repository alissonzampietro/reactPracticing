import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contact List</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));