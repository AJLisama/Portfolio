import phoneIcon from '../images/phoneIconBlack.png';
import emailIcon from '../images/emailIconBlack.png';
import addressIcon from '../images/addressIconBlack.png';
import './contact.css';

export default function Contact() {
	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">


				<div className="c-left">
					<h1 className="c-title">
						Let's discuss about projects
					</h1>
					<div className="c-info">

						<div className="c-info-item">
							<img
								className="c-icon"
								src={phoneIcon}
								alt=""
							/>
							+639955288255
						</div>

						<div className="c-info-item">
							<img
								className="c-icon"
								src={emailIcon}
								alt=""
							/>
							ducusinabdul@gmail.com
						</div>

						<div className="c-info-item">
							<img
								className="c-icon"
								src={addressIcon}
								alt=""
							/>
							14 Manalili St Central Signal Taguig City
						</div>

					</div>
				</div>
			

				<div className="c-right">
					<p className="c-desc">
						<b>What is my story?</b> When I was in high school, I was fascinated with websites and softwares. I spend my summer break exploring and playing around with websites and software. And on that time I learn to modify games like GTA Vice City.
					</p>
					<form>
						<input type="text" placeholder="Name" name="user_name"/>
						<input type="text" placeholder="Subject" name="user_subject"/>
						<input type="text" placeholder="Email" name="user_email"/>
						<textarea rows="5" placeholder="Message" name="message"/>
						<button>Submit</button>
					</form>
				</div>

			
			</div> {/*c-wrapper end*/}
		</div> /*c end*/
	)
};