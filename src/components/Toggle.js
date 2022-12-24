import './toggle.css';
import Sun from '../images/sunIcon.PNG';
import Moon from '../images/moonIcon.png';
import { useContext } from 'react';
import { ThemeContext } from '../context.js';

export default function Toggle() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleClick = ()=> {
		theme.dispatch({type:'TOGGLE'})
	};

	return(
		<div className="t">
			<img className="t-icon" src={Sun} alt=""/>
			<img className="t-icon" src={Moon} alt=""/>
			<button className="t-button" onClick={handleClick}
			style={{left: darkMode ? -5 : 25}}></button>
		</div>
	)
};