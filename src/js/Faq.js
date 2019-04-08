import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import Style from './../css/style.css';
import './../css/faq.css';

function live(i) {
	if (i == true) {
		console.log("live");
	}
	else {
	console.log("faq");
}
}
function MakeQuestion(props){
	return(
		<div class="content">
        <div id="accordion">
          <div class="card-header">
            <div class="card-header" id={props.headingPath}  data-toggle="collapse" data-target={props.collapsePath} aria-expanded="false" aria-controls={props.collapse}>
              <h5 class="mb-0">
                <button class="btn btn-link">
                  {props.question}
                  <i class="fa fa-chevron-down"></i>
                </button>
              </h5>
            </div>

						<div id={props.collapse} class="collapse" aria-labelledby={props.heading} data-parent="#accordion">
						 <div class="card-body">
							 {props.answer}
						 </div>
					 </div>
					 </div>
					 </div>
				 </div>
	)
}
function MakehyperLink(props)
{
	return(
  	<a class="textLink" href={props.link}>{props.text}</a>
	)
}

class Faq extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open_bracket: "{ ",
			close_bracket: " }",
		};
	}
	hyperLink(t,l){
		return(
		<MakehyperLink
		text = {t}
		link = {l}
		/>
		);
	}
	renderQuestion(q,a,h,c,hp,cp) {
		return(
		<MakeQuestion
			question = {q}
			answer = {a}
			heading = {h}
			collapse = {c}
			headingPath = {hp}
			collapsePath = {cp}
			/>
		);
	}


	render() {

		return(

	<div class="wrapper">
      <h1 class="section-header-gray">
        <span class="bracket-color">{this.state.open_bracket}</span> FAQ
        <span class="bracket-color">{this.state.close_bracket}</span>
      </h1>

			<div>
			<div className="faq">
		        {this.renderQuestion("WHAT IS A HACKATHON", //question
		            				"A hackathon is tech innovation marathon. This is where your dreams run wild. Solve a real-world problem with technology or build the next Iron Man suit.",
												"headingOne",
												"collapseOne",
												"#headingOne",
												"#collapseOne")
		        }
		    </div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WHAT IF I DONT HAVE A TEAM OR IDEA", //question
									"No problem! You can find a team once you arrive. Most hackers arrive without a team. \n You will often find inspiration for ideas at the hackathon.",
									"headingTwo",
									"collapseTwo",
									"#headingTwo",
									"#collapseTwo")
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WHAT IF I DONT CODE", //question
					"This is your perfect opportunity to learn something new! There will be workshops geared towards beginners and mentors to help you throughout the event.",
					"headingThree",
					"collapseThree",
					"#headingThree",
					"#collapseThree")
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WHO CAN ATTEND", //question
					"Current undergraduate students can compete. Anyone is welcome to drop by and see what participants are working on!",
					"headingFour",
					"collapseFour",
					"#headingFour",
					"#collapseFour") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WHAT CAN I BUILD", //question
					"Anything! Web, mobile, desktop, and hardware projects are all welcome. Projects will be judged based on creativity, technical difficulty, polish, and usefulness!",
					"headingFive",
					"collapseFive",
					"#headingFive",
					"#collapseFive") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WILL THERE BE HARDWARE", //question
					"We have partnered with MLH to provide hardware hacking resources to all hackers. Check out the full",
					"headingSix",
					"collapseSix",
					"#headingSix",
					"#collapseSix") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("HOW MUCH DOES IT COST", //question
					"HackUMBC is free! Food, beverages, swag, and workspaces will be provided. You just have to travel to the event and we will take care of the rest! :)",
					"headingSeven",
					"collapseSeven",
					"#headingSeven",
					"#collapseSeven") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WHAT SHOULD I BRING", //question
					"Valid photo ID is required. (State issued ID is highly recommended.) Laptops, sleeping bags, and toiletries are highly recommended.",
					"headingEight",
					"collapseEight",
					"#headingEight",
					"#collapseEight") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("HOW BIG SHOULD TEAMS BE? CAN I HACK ALONE", //question
					"Teams should be at most FOUR people. We highly recommend that you form a team, but solo hackers are allowed.",
					"headingNine",
					"collapseNine",
					"#headingNine",
					"#collapseNine") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("CAN I BUILD ON PAST PROJECTS", //question
					"We strongly discourage building off of existing projects you've worked on. However, using third–party APIs and libraries are encouraged, as long as they're accessible by everyone.)",
					"headingTen",
					"collapseTen",
					"#headingTen",
					"#collapseTen") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("WILL THERE BE TRAVEL REIMBURSEMENT", //question
					"At this time we will NOT be able to provide travel reimbursement to hackers due to shortage of funds. However, we WILL be able to provide busing to University of Maryland, College Park this semester so watch out for that.",
					"headingEleven",
					"collapseEleven",
					"#headingEleven",
					"#collapseEleven") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("DO I HAVE TO SLEEP OVER AT THE HACKATHON", //question
					"You are always able to come and go at the hackathon but only work done at the venue will be eligible for judging. You are also welcome to bring a sleeping bag but we will not have a designated area for sleeping.",
					"headingTwelve",
					"collapseTwelve",
					"#headingTwelve",
					"#collapseTwelve") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("IS THERE A CODE OF CONDUCT", //question
					"Yes it can be found " + this.hyperLink("HERE", "https://static.mlh.io/docs/mlh-code-of-conduct.pdf"),
					"headingThirteen",
					"collapseThirteen",
					"#headingThirteen",
					"#collapseThirteen") //Answer
				}
			</div>
			<br />
			<br />
			<div className="faq">
				{this.renderQuestion("HOW BIG SHOULD TEAMS BE? CAN I HACK ALONE", //question
					"Teams should be at most FOUR people. We highly recommend that you form a team, but solo hackers are allowed.",
					"headingFourteen",
					"collapseFourteen",
					"#headingFourteen",
					"#collapseFourteen") //Answer
				}
			</div>
			<br />
			<br />
		</div>
	</div>
			);
  	}
}

class Live extends React.Component {

}

export default Faq;
