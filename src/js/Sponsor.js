import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/sponsors', false, /\.(png|jpe?g|svg)$/));

function MakeSponsor(props) {
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

//Rows
class Rows extends React.Component {
	constructor(props) {
		super(props);

	}

	renderSponsor(p,u,c,l) {
		return(
			<MakeSponsor
				position={p}
				url={u}
				className={c}
				logo={l}
			/>
		);
	}

	render() {
		return(
			<div>
		{/*Diamond Sponsors*/}
			<div className="sponsors" id='diamond-row'>
		        {this.renderSponsor("col-sm-4 TRowePos", //Positioning
		            				"https://www3.troweprice.com/usis/corporate/en/home.html", //Url
									"img-fluid TRoweLogo", //Logo size
									images['TRowe.png']) //Path to Logo
		        }
		    </div>
		    <br />
        	<br />
    	{/*Gold Sponsor*/}
		    <div className="sponsors" id="gold-row">
		    	{this.renderSponsor("col-sm-4",
		            				"http://buildportcovington.com/",
									"img-fluid portLogo",
									images['port-covington.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://www.boozallen.com/",
									"img-fluid BoozLogo",
									images['Booz-Allen-Hamiliton-logo.png'])
		        }
		        {this.renderSponsor("col-sm-4 leidosPos",
		            				"http://www.leidos.com/",
									"img-fluid leidosLogo",
									images['leidos.png'])
		        }
		        
		    </div>
		    <br />
        	<br />
        	<div className="sponsors" id='third-row'>
		    	{this.renderSponsor("col-sm-4",
		            				"http://wellerdevelopment.com/",
									"img-fluid wellerLogo",
									images['weller-development.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://www.ltsnet.net/",
									"img-fluid ltsLogo",
									images['LTS.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://www.intelligencecareers.gov/nsa/",
									"img-fluid nsaLogo",
									images['nsa.png'])
		        }
		    </div>
		    <br />
        	<br />
        {/*Silver Sponsors*/}
        	<div className="sponsors" id='fourth-row'>
		    	{this.renderSponsor("col-sm-4",
		            				"http://clearedgeit.com/",
									"img-fluid clearLogo",
									images['clear-edge.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"http://www.jhuapl.edu/",
									"img-fluid aplLogo",
									images['jhuapl.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://freedomconsultinggroup.com/",
									"img-fluid freedomLogo",
									images['freedom.png'])
		        }
		    </div>
		{/*Bronze Sponsors*/}
        	<div className="sponsors" id='fifth-row'>
		    	{this.renderSponsor("col-sm-4 jpMorgonPos",
		            				"https://www.jpmorgan.com/country/US/en/jpmorgan",
									"img-fluid jpMorganLogo",
									images['jpmorgan.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://facebook.com",
									"img-fluid facebookLogo",
									images['facebook.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"http://www.focusedsupport.com/",
									"img-fluid focusedLogo",
									images['focused-support.png'])
		        }
		    </div>
		    <br />
		    <br />
        	<div className="sponsors" id='sixth-row'>
		    	{this.renderSponsor("col-sm-4",
		            				"http://www.whiting-turner.com/",
									"img-fluid whitingLogo",
									images['whiting-turner.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://minerkasch.com",
									"img-fluid minerKaschLogo",
									images['miner-kasch.png'])
		        }
		        {this.renderSponsor("col-sm-4 intelliforcePos",
		            				"https://www.intelliforce-itsg.com/",
									"img-fluid intelliforceLogo",
									images['intelliforce.png'])
		        }
		    </div>
        	<div className="sponsors" id='seventh-row'>
		    	{this.renderSponsor("col-sm-4 alexRow",
		            				"https://entrepreneurship.umbc.edu",
									"img-fluid alexBrownLogo",
									images['alex-brown.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://www.csee.umbc.edu/",
									"img-fluid cseeLogo",
									images['umbc-csee.png'])
		        }
		        {this.renderSponsor("col-sm-4 coeitPos",
		            				"https://coeit.umbc.edu/",
									"img-fluid coeitLogo",
									images['UMBC-coeit.png'])
		        }
		    </div>
		    <br />
		    <br />
		{/*Partners*/}
        	<div className="sponsors" id='eighth-row'>
		    	{this.renderSponsor("col-sm-4",
		            				"https://mlh.io",
									"img-fluid mlhLogo",
									images['mlh.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://jetbrains.com",
									"img-fluid jetLogo",
									images['jet-brains.png'])
		        }
		        {this.renderSponsor("col-sm-4",
		            				"https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_campaign=mlh-sponsorship&utm_medium=referral?utm_source=Direct",
									"img-fluid muleLogo",
									images['sticker-mule.png'])
		        }
		    </div>
		    <br />
		    <br />
        	<div className="sponsors" id='ninth-row'>
		    	{this.renderSponsor("col-sm-4 twoRow",
		            				"https://github.com",
									"img-fluid githubLogo",
									images['github.png'])
		        }
		        {this.renderSponsor("col-sm-4 twoRowWolfram",
		            				"https://www.wolfram.com/language/",
									"img-fluid wolframLogo",
									images['wolfram-language.png'])
		        }
		    </div>

		    </div>

		);
	}

}


// Final Render
class Sponsor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Sponsors",
			open_bracket: "{ ",
			close_bracket: " }",
			sponsor: {
				statement: "Interested in sponsoring us? Email us at",
				href: "mailto:sponsor@hackumbc.org",
				email: " sponsor@hackumbc.org"
			}
		}
	}

	render() {
		return(
			<div className="wrapper">
		        <h1 className="section-header-gray">
		          <span className="bracket-color">{this.state.open_bracket}</span> {this.state.title}
		          <span className="bracket-color">{this.state.close_bracket}</span>
		        </h1>
		        <br />
		        <Rows />
		        <br />
		        <br />
		        <p className="cl-effect-3">
		          {this.state.sponsor.statement}
		          <a className="textLink"
		          	 href={this.state.sponsor.href}>
		          	 {this.state.sponsor.email}
		          </a>
		        </p>

		    </div>
     );
 }
}

export default Sponsor;
// export default SponsorPage;