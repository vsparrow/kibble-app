import React from 'react';
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'

const App = (props) => {
	return (
		<div>
			<Navigation />
			Kibble
			<AddKibbleForm />
			<ShowKibbles />
		</div>
	)
}

export default App;
