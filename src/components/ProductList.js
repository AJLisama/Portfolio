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
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
			</div>

		</div>
	)
};