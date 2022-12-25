import phoneIcon from '../images/phoneIconBlack.png';
import emailIcon from '../images/emailIconBlack.png';
import addressIcon from '../images/addressIconBlack.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { ThemeContext } from '../context.js';

export default function Contact() {
	/*I use emailjs for handling emails*/
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e)=> {
		e.preventDefault();

		emailjs.sendForm('service_inzfoh8', 'template_72otoj6', formRef.current, 'kgGen8Y-tgjfs_7Y0')
		.then((result)=> {
			console.log(result.text);
			setDone(true);
		}, (error)=> {
			console.log(error.text);
		});

	};

	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">


				<div className="c-left">
					<h1 className="c-title">
						Contact Information
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
					<form ref={formRef} onSubmit={handleSubmit}>
						<input style={{backgroundColor: darkMode? "#222" : "white"}} type="text" placeholder="Name" name="user_name"/>
						<input style={{backgroundColor: darkMode? "#222" : "white"}} type="text" placeholder="Subject" name="user_subject"/>
						<input style={{backgroundColor: darkMode? "#222" : "white"}} type="text" placeholder="Email" name="user_email"/>
						<textarea style={{backgroundColor: darkMode? "#222" : "white"}} rows="5" placeholder="Message" name="message"/>
						<button>Submit</button>
						{done && "Email Sent"}
					</form>
				</div>

			
			</div> {/*c-wrapper end*/}
		</div> /*c end*/
	)
};