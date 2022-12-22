import './product.css';
/*import sampleProject1 from '../images/sampleProject1.PNG'*/

export default function Product() {
	return (
		<div className="p-card">
			
			<div className="p-card-top">
				<div className="p-card-circle"></div>
				<div className="p-card-circle"></div>
				<div className="p-card-circle"></div>
			</div>

			<a href="www.google.com" target="_blank" rel="noreferrer"> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung link*/}
				<img className="p-img" src="" alt="" /> {/*kapag natapos ko na ang iba kong projects, ilalagay ko dito yung screen shot*/}
			</a>

		</div>
	)
};