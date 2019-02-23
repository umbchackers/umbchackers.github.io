import React from 'react'
import Logo from '../img/HackUMBC.Logo.Gold-2.png'
import { Spin } from 'react-burgers'


function Tab(props) {
	return(
		<a id={props.id}
		   className="navbar-brand"
		   href={props.href}>
		   {props.name}
		</a>
	);
}

function LogoTab(props) {
	return(
		<a id="logo" class="navbar-brand" href="#top">
			<img
				src={Logo}
				height="50"
				width="50"
			/>
		</a>
	);
}

// function changeBurger() {
// 	this.setState({
// 		active: true
// 	});
// }

class Burger extends React.Component {
	
	changeBurger(i) {
		return(
			<myBurger 
				active = {this.props.i}
			/>
		);
	}

	render() {
		return(
			<div>
				{this.changeBurger(false)}
			</div>
		);
	}
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}
	renderTab(n,i,h) {
		return(
			<Tab
				name={n}
				id={i}
				href={h}
			/>
		);
	}

	changeBurger() {
		return({active:true});
	}
	changeMyBurg = () => {
		this.setState(
			prevState => ({active: !prevState.active})
		);
	}

	render() {
		if (window.innerWidth > 800) {
			return(
				<navbar className="navbar fixed-top navbar-dark">
					<div className="wrapper">
						{this.renderTab("about","aboutTab","#about")}
						{this.renderTab("faq","faqTab","#faq")}
			        </div>
			        <LogoTab />
			        <div className="wrapper">
			          {this.renderTab("sponsors","sponsorsTab","#sponsors")}
			          {this.renderTab("social media","social-madiaTab","#footer")}
			        </div>
		        </navbar>
			);
		}
		// <a id="burger"> <i className="fa fa-bars"></i> </a>
	
		//Mobile navbar
		else {
			return(
				<navbar className="navbar fixed-top navbar-dark">
					<LogoTab />
			<Spin
				width={32}
				lineHeight={5}
				color='#fddf87'
				active = {this.state.active}
				onClick = {()=>this.changeMyBurg()}
			/>
				</navbar>
			);
		}
	}
}

class MobileSidebar extends React.Component {
	render() {
		return(
	      	<div class="overlay-content">
		        <a href="#about" onclick="changeBurger(myBurg)">
		        	about
		        </a>
		        <a href="#faq" onclick="changeBurger(myBurg)">
		        	faq
		        </a>
		        <a href="#sponsors" onclick="changeBurger(myBurg)">
		        	sponsors
		        </a>
		        <a href="#footer" onclick="changeBurger(myBurg)">
		        	social media
		        </a>
	      	</div>
		);
	}
}

export default Navbar;