import React from "react";
import "../styles/img.css";

function Birthday({ img, name, age }) {
	return (
		<section className="birthday">
			<div className="img-container">
				<img src={img} alt="" />
			</div>
			<h1>{name}</h1>
			<h4>{age} years</h4>
		</section>
	);
}

export default Birthday;
