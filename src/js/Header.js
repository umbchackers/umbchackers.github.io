import React from 'react';
import Logo from '../img/textLogo-white.svg'

function Button(props) {
	return(
		<a href={props.url} target="_blank">
            <button id="header-apply">{props.name}</button>
    	</a>
    );
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logo: "",

		}
	}

	renderButton(n,u) {
		return(
			<Button
 				name={n}
				url={u}
			/>
		);
	}


	render() {
		return(
		    <div class="wrapper valign">
		    	<img src={Logo} id={this.id} />
				<div class="buttonBox">
					{this.renderButton("Map","https://eng.hackumbc.org/")}
				</div>
			</div>
		);
	}
}


export default Header;