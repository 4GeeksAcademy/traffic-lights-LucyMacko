import React, {useState} from "react";

const Home = () => {
	const [selectedDiv, setSelectedDiv] = useState(null);

	const handleClick = (divId) => {
		setSelectedDiv(divId);
	}

	const existingClassesLight1 = 'red circle';
	const existingClassesLight2 = 'orange circle';
	const existingClassesLight3 = 'green circle';

	const combinedClasses1 = `${existingClassesLight1} ${selectedDiv === 'div1' ? 'selected' : ''}`;
	const combinedClasses2 = `${existingClassesLight2} ${selectedDiv === 'div2' ? 'selected' : ''}`;
	const combinedClasses3 = `${existingClassesLight3} ${selectedDiv === 'div3' ? 'selected' : ''}`;

	return (
		<div>
			<div className="container bg-dark" id="pole"></div>
			<div className="container bg-dark pt-2" id="mainContainer">			
				<div className={combinedClasses1} onClick={() => handleClick ('div1')}>🧍‍♀️</div>
				<div className={combinedClasses2} onClick={() => handleClick ('div2')}></div>
				<div className={combinedClasses3} onClick={() => handleClick ('div3')}>🏃‍♂️</div>			
			</div>
		</div>
	);
};

export default Home;
