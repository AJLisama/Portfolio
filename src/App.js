import Intro from './components/Intro.js';
import About from './components/About.js';
/*import Product from './components/Product.js';*/
import ProductList from './components/ProductList.js';

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      {/*<Product/>*/}
    </div>
  );
}

export default App;