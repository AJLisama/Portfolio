import "./Intro.css";
import profile from "../images/dp.png";

export default function Intro() {
	return (
		<div className="i">
			
			<div className="i-left">
				<div className="i-left-wrapper" >
					<h2 className="i-intro">Hello I'm</h2>
					<h1 className="i-name">AJ Ducusin</h1>

					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">
								Full Stack Developer
							</div>
							<div className="i-title-item">
								Front End Developer
							</div>
							<div className="i-title-item">
								Back End Developer
							</div>
							<div className="i-title-item">
								Architectural Drafter
							</div>
						</div>
					</div>

					<p className="i-desc" >
						I've worked in the construction industry as a Drafter for almost 6 years. With the knowledge and skills that I aquire I'm able to use it in designing a websites.
					</p>

				</div>	
			</div>
			
			<div className="i-right">
				<div className="dp-bg" ></div>
				<img src={profile} alt="Abdul Ducusin" className="i-image"/>
			</div>

		</div>
	)
}