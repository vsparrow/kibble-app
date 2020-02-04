import React from 'react';
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibble from './components/ShowKibble'

const App = (props) => {
	return (
		<div>
			<Navigation />
			Kibble
			<AddKibbleForm />
			<ShowKibble />
		</div>
	)
}

export default App;
