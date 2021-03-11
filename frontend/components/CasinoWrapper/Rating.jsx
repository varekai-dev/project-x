import React from "react";
import { FaStar } from "react-icons/fa";

function CasinoReview() {
	return (
		<>
			<div className="casino__rating">
				<div className="casino__rating-start">
					{" "}
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
				<div className="casino__rating-numbers">9.80 / 10</div>
			</div>
		</>
	);
}

export default CasinoReview;
