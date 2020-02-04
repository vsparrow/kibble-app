import React from 'react'

const About = props => {
	return (
		<div>
			<h2>About the app</h2>
			<p>App was created to keep track of my cat's kibble intake. To ween a cat of of carbohydrates one must be gradual with the process. The goals of the app are:</p>
				
				<ul>
					<li>keep a log of cat's dry food diet</li>
					<li>find average quanity of kibble consumed over time</li>
					<li>decrease kibble slightly after time as data is processed</li>
					<li>wet food is not processed as data. Any quanity is ok</li>
				</ul>
			
		</div>
	)
}

export default About