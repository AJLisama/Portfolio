import Intro from './components/Intro.js';
import About from './components/About.js';
import ProductList from './components/ProductList.js';
import Contact from './components/Contact.js';
import Toggle from './components/Toggle.js';
import { useContext } from 'react';
import { ThemeContext } from './context.js';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode ? "white" : "black"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;