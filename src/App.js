import React , { useState } from "react";

const Display = ({counter}) => (
		<h1>{counter}</h1>
);

const Button = ({onClick, text}) => (
				<button  onClick={onClick} > {text} </button>	
);

const App = () => {

	const [counter , setCounter] = useState(0);

	const increaseByOne = () => setCounter(counter + 1);
	const setToZero = () => setCounter(0);
	const decreaseByOne = () => setCounter(counter - 1);


	return (
			<>	
				<Display counter =  {counter} />
				<Button  onClick={increaseByOne}  text={"+"} />	
				<Button  onClick={setToZero}  text={"Zero"} />	
				<Button  onClick={decreaseByOne}  text={"-"} />				
			</>			
	)	
};

export default App;