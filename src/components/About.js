import './about.css';
import image1 from '../images/concept/concept3.png';
import imageAward from '../images/specialAward.png'

export default function About() {
	return (
		<div className="a">
			
			<div className="a-left" >
				<div className="a-card bg"></div>
				<div className="a-card">
					<img className="a-img" src={image1} alt=""/>
				</div>
			</div>
			
			<div className="a-right" >

				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					The greatest reward a man can achieve from his toil is not what he gets, but what he becomes by it.
				</p>
				<p className="a-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>

				<div className="a-award">
					<img className="a-award-img" src={imageAward} alt="Zuit Award"/>
					<div className="a-award-texts">
						<h4 className="a-award-title" >Enthusiastic Learner Awardee</h4>
						<p className="a-award-desc">
							During my studies at Zuitt Coding Bootcamp, I was awarded as the Enthusiastic Learner.
						</p>
					</div>
				</div>

			</div>

		</div>
	)
};