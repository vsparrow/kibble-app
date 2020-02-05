import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'
import Login from './components/Login'

import {getKibbles} from './reducers/kibbleReducer'

const App = (props) => {
	console.log(props)
	props.getKibbles()
	// useEffect(()=>{props.getKibbles()},[])

	
	return (
		<div>
			<Router>
				<Navigation />
				Kibble
				<Route exact path="/" render={()=><ShowKibbles />}/>
				<Route path="/addkibble" render={()=><AddKibbleForm />} />
				<Route path="/about" render={()=><About />} />
				<Route path="/login" render={()=><Login />} />
			</Router>	
		</div>
	)
}

const mapDispatchToProps = {getKibbles}

export default connect(null, mapDispatchToProps)(App);
