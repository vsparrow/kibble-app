import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'

const App = (props) => {
	return (
		<div>
			<Router>
				<Navigation />
				Kibble
				<AddKibbleForm />
				<ShowKibbles />
				<About />
			</Router>	
		</div>
	)
}

export default App;
