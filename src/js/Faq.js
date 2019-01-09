import React from 'react';
import ReactDOM from 'react-dom';
// import './css/style.css';

function live(i) {
	if (i == true) {
		console.log("live");
	}
	else {
	console.log("faq");
	}
}

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: "Faq",
			answer: "",
		};
	}
	renderQuestion(q,a) {
		this.setState({
			question: q,
			answer: a
		});
	}


	render() {
		return();
  	}
}

class Live extends React.Component {

}

export default About;