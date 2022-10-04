import React from "react";
import "../styles/birthday.css";

function Birthday({ img, name, age }) {
	return (
		<section className="birthday">
			<div className="img-container">
				<img src={img} alt="" />
			</div>
			<div className="desc">
				<h3>{name}</h3>
				<h4>{age} years</h4>
			</div>
		</section>
	);
}

export default Birthday;
