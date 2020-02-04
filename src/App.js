import React from 'react';
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'

const App = (props) => {
	return (
		<div>
			<Navigation />
			Kibble
			<AddKibbleForm />
			<ShowKibbles />
			<About />
		</div>
	)
}

export default App;
