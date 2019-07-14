import React from 'react';
import Logo from '../img/textLogo-white.svg'

function Button(props) {
	return(
		<a href={props.url} target="_blank">
            <button id="header-apply">{props.name}</button>
    	</a>
    );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/social', false, /\.(png|jpe?g|svg)$/));

function MakeSocialMediaIcon(props) {
	return (
		<div className={props.position}>
			<a
	        	href={props.url}
				target="_blank"
	        >
			<img
				className={props.className}
				src={props.logo}
			/>
			</a>
		</div>
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

	renderSocial(p,u,c,l) {
		return(
			<MakeSocialMediaIcon
				url={u}
				className={c}
				logo={l}
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

class SocialMedia extends React.Component {
	constructor(props) {
		super(props);
		}
	render() {
		return(
			<div>
				{this.renderSocial("https://www.facebook.com/hackumbc",
								"img-fluid fa fa-facebook",
								images['social-1_logo-facebook.svg'])
					}
					{this.renderSocial("https://twitter.com/hackumbc",
								"img-fluid fa fa-twitter",
								images['social-1_logo-twitter.svg'])
					}
					{this.renderSocial("https://www.instagram.com/hackumbc/",
								"img-fluid fa fa-instagram",
								images['social-1_logo-instagram.svg'])
					}
					{this.renderSocial("https://www.github.com/hackumbc/",
								"img-fluid fa fa-github",
								images['social-1_logo-github.svg'])
					}

			</div>

     );
 }
}

export default Header;
