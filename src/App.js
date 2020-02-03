import React from 'react';
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'

const App = (props) => {
	return (
		<div>
			<Navigation />
			Kibble
			<AddKibbleForm />
		</div>
	)
}

export default App;
