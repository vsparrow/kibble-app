import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Navigation from './components/Navigation'
import AddKibbleForm from './components/AddKibbleForm'
import ShowKibbles from './components/ShowKibbles'
import About from './components/About'
import Login from './components/Login'

import {initKibbles} from './reducers/kibbleReducer'
import {localStorageLogin} from './reducers/userReducer'

const App = (props) => {
	// console.log(props)
	// props.getKibbles()
	useEffect(()=>{props.initKibbles()},[])
	useEffect(()=>{
		const loginState = window.localStorage.getItem('kibbleAppUser')
		if(loginState){
			const user = JSON.parse(loginState)
			props.localStorageLogin(user)
		}
	},[])
	
	return (
		<div>
			<Router>
				<Navigation />
				<div>{props.message}</div>
				Kibble
				<Route exact path="/" render={()=><ShowKibbles />}/>
				<Route path="/addkibble" render={()=><AddKibbleForm />} />
				<Route path="/about" render={()=><About />} />
				<Route path="/login" render={()=><Login />} />
			</Router>	
		</div>
	)
}

const mapStateToProps = state => ({message: state.message, user: state.user})
const mapDispatchToProps = {initKibbles,localStorageLogin}

export default connect(mapStateToProps, mapDispatchToProps)(App);
