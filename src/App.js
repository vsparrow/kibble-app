import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'
          // <Route exact path="/" render={() => <Home />} />
const App = (props) => {
	return (
		<div>
			<Router>
				<Navigation />
				Kibble
				<Route exact path="/" render={()=><ShowKibbles />}/>
				<Route path="/addkibble" render={()=><AddKibbleForm />} />
				<Route path="/about" render={()=><About />} />
				<Route path="/login" render={()=><ShowKibbles />} />
			</Router>	
		</div>
	)
}

export default App;
