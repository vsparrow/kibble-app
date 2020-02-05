import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'
import Login from './components/Login'

import {initKibbles} from './reducers/kibbleReducer'

const App = (props) => {
	// console.log(props)
	// props.getKibbles()
	useEffect(()=>{props.initKibbles()},[])

	
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

const mapDispatchToProps = {initKibbles}

export default connect(null, mapDispatchToProps)(App);
