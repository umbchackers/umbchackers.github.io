import React from 'react'
import Logo from '../img/HackUMBC.Logo.Gold-2.png'

const dog = {Logo}

function changeBurger(x) {
  var burger = document.getElementById("burger");
  if (x.classList.contains("change"))
    x.classList.remove("change");
  else
    x.classList.add("change");
}

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




class Navbar extends React.Component {

	renderTab(n,i,h) {
		return(
			<Tab
				name={n}
				id={i}
				href={h}
			/>
		);
	}

	render() {
		return(
			<nav class="navbar fixed-top navbar-dark">
				<div class="wrapper">
					{this.renderTab("about","aboutTab","#about")}
					{this.renderTab("faq","faqTab","#faq")}
		        </div>
		        <LogoTab />
		        <div class="wrapper">
		          {this.renderTab("sponsors","sponsorsTab","#sponsors")}
		          {this.renderTab("social media","social-madiaTab","#footer")}
		        </div>
		        <a id="burger"> <i class="fa fa-bars"></i> </a>
	        </nav>
		);
	}
}

export default Navbar;