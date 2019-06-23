import React from 'react';
import './../css/footer.css';


function MakeSocialMediaIcon(props) {
  return (
    <a
      href={props.u}
      className={props.c}
      target="_blank"
    ></a>
  );
}

class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  renderSocial(u,c) {
    return(
      <MakeSocialMediaIcon
        url={u}
        className={c}
      />
    );
  }

	render() {
		return(
		    <div class="wrapper">
        <h1 class="section-footer">
          <div className="socialCenterBox">
            <div className="socialMargins">
              <renderSocial url="https://www.facebook.com/hackumbc" className="fa fa-facebook" />
              <renderSocial url="https://twitter.com/hackumbc" className="fa fa-twitter" />
              <renderSocial url="https://www.instagram.com/hackumbc/" className="fa fa-instagram" />
              <renderSocial url="https://www.instagram.com/hackumbc/" className="fa fa-github" />
            </div>

            <p className="Trademark" >
              © 2018 HackUMBC
            </p>
          </div>
        </h1>
      </div>
		);
	}
}


export default Footer;