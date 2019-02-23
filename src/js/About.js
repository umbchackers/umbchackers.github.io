import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.css';

function live(i) {
	if (i == true) {
		console.log("live");
	}
	else {
	console.log("about");
	}
}

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "About",
			open_bracket: "{ ",
			close_bracket: " }",
			info: "The University of Maryland, Baltimore County's 24-hour tech innovation marathon where students across the East Coast collaborate on new ideas to build mobile, web, and hardware projects. HackUMBC invites diverse groups of students to enjoy a weekend of hacking, workshops, tech talks, networking, and other fun activities. At the end of 24 hours, participants' projects are presented and judged for different prize categories from sponsors and other organizations."
		};
	}

	render() {
		return(
	      <div className="wrapper">
	        <h1 className="section-header">
	          <span className="bracket-color">{this.state.open_bracket}</span>
	          {this.state.title}
	          <span className="bracket-color">{this.state.close_bracket}</span>
	        </h1>
	        <div className="content slideanim">
	          <p>
	            {this.state.info}
	          </p>
	        </div>
	      </div>
	     );
  	}
}

class Live extends React.Component {

}

export default About;