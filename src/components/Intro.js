import "./intro.css";
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

				</div> {/*i-left-wrapper end*/}

					<svg 
	 					width="60px"
	 					viewBox="0 0 14.334 24.75"
	 					className="i-scroll"
	 				>
    				<circle
    					class="circle-1"
    					fill="black"
    					cx="7.167"
    					cy="6"
    					r="1.2"
    				/>
    				<circle
    					class="circle-2"
    					fill="black"
    					cx="7.167"
    					cy="6"
    					r="1.2"
    				/>
  					<path
  						stroke="black"
  						fill="transparent"
  						d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"
  					/>
					</svg>

			</div> {/*i-left end*/}
			
			<div className="i-right">
				<div className="dp-bg" ></div>
				<img className="i-image" src={profile} alt="Abdul Ducusin"/>
			</div>

		</div>
	)
}