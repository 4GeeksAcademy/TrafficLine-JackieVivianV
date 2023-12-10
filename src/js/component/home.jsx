import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [redLightOn, setColorRed] = useState(false);
	const [yellowLightOn, setColorYellow] = useState(false);
	const [greenLightOn, setColorGreen] = useState(false);
	const [babyBlueLightOn, setColorBabyBlue] = useState(false);
	const [add, setColorAdd] = useState("none");

	function buttonClick(){
		setColorAdd("flex");
	}

	function handlerChangeLight(){
		if (redLightOn === false && greenLightOn === false && yellowLightOn === false){
			setColorRed(true);
		} else if (redLightOn === true && greenLightOn === false && yellowLightOn === false){
			setColorGreen(true);
			setColorRed(false);
		} else if (redLightOn === false && greenLightOn === true && yellowLightOn === false){
			setColorYellow(true);
			setColorGreen(false);
		} else {
			setColorRed(true);
			setColorYellow(false);
	    }

	 }

	function redHandlerClick(){

		if (yellowLightOn === true || greenLightOn === true || babyBlueLightOn === true) {
			setColorYellow(false);
			setColorGreen(false);
			setColorBabyBlue(false);
		}

		if (redLightOn === false) {
			setColorRed(true);
		} else {
			setColorRed(false);
		}
		
	}

	function yellowHandlerClick(){

		if (redLightOn === true || greenLightOn === true || babyBlueLightOn === true) {
			setColorRed(false);
			setColorGreen(false);
			setColorBabyBlue(false);
		}

		if (yellowLightOn === false) {
			setColorYellow(true);
		} else {
			setColorYellow(false);
		}

		
	}

	function greenHandlerClick(){

		if (yellowLightOn === true || redLightOn === true || babyBlueLightOn === true) {
			setColorYellow(false);
			setColorRed(false);
			setColorBabyBlue(false);
		}

		if (greenLightOn === false) {
			setColorGreen(true);
		} else {
			setColorGreen(false);
		}
		
	}

	function babyBlueHandlerClick(){

		if (yellowLightOn === true || redLightOn === true || greenLightOn === true) {
			setColorYellow(false);
			setColorRed(false);
			setColorGreen(false);
		}

		if (babyBlueLightOn === false) {
			setColorBabyBlue(true);
		} else {
			setColorBabyBlue(false);
		}
		
	}



	return (
		<div className="container d-block bg-dark justify-content-center rounded-4 p-3" style={{width: "10rem"}}>
			<div className="bg-danger mt-3 mx-auto " style ={{borderRadius:"50%", width:"100px",height: "100px", boxShadow: redLightOn ? "0 0 40px #FFFFFF" : "none"}} onClick={redHandlerClick}></div> 
			<div className="bg-warning mt-3 mx-auto" style ={{borderRadius:"50%", width:"100px",height: "100px", boxShadow: yellowLightOn ? "0 0 40px #FFFFFF" : "none"}} onClick={yellowHandlerClick}></div> 
			<div className="bg-success mt-3 mb-3 mx-auto" style ={{borderRadius:"50%", width:"100px",height: "100px", boxShadow: greenLightOn ? "0 0 40px #FFFFFF" : "none"}} onClick={greenHandlerClick}></div> 
			<div className="bg-info mt-3 mb-3 mx-auto" style ={{display: add, borderRadius:"50%", width:"100px",height: "100px", boxShadow: babyBlueLightOn ? "0 0 40px #FFFFFF" : "none"}} onClick={babyBlueHandlerClick}></div> 
			<button className="bg-dark rounded-4 text-light" onClick={buttonClick}>Radioactive Semáforo</button>	
			<button className="bg-dark rounded-4 text-light mt-3" onClick={handlerChangeLight}>The light is changing</button>	
		</div>
	);
};

export default Home;
