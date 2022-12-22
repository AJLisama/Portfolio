import sampleProject1 from '../images/sampleProject1.PNG';
import sampleProject2 from '../images/sampleProject2.PNG';
import sampleProject3 from '../images/sampleProject3.png';
import sampleProject4 from '../images/sampleProject4.png';
import sampleProject5 from '../images/sampleProject5.png';
import sampleProject6 from '../images/sampleProject6.png';
import './productList.css';
import Product from './Product.js';

export default function ProductList() {
	return (
		<div className="pl">
			
			<div className="pl-texts">
				<h1 className="pl-title">Create & Inspire</h1>
				<p className="pl-desc">
					Colors plays an important part of a design. In web designing, it is the combination of colors, pictures, and functionality that create a stunning website.
				</p>
			</div>

			<div className="pl-list">

				<div className="p-card card-1">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject1} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

				<div className="p-card card-2">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject2} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

				<div className="p-card card-3">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject3} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

				<div className="p-card card-4">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject4} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

				<div className="p-card card-5">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject5} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

				<div className="p-card card-6">
					<div className="p-card-top">
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
						<div className="p-card-circle"></div>
					</div>
					<a href="google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
						<img className="p-img" src={sampleProject6} alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
					</a>
				</div> {/*p-card card-1 end*/}

			</div> {/*pl-list end*/}

		</div>
	)
};