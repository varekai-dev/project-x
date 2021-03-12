import React from "react";
import Rating from "@material-ui/lab/Rating";

function CasinoReview({ rating, number = false }) {
	const newRating = rating / 2;
	return (
		<>
			<div className="casino__rating">
				<div className="casino__rating-start">
					<Rating precision={0.5} name="read-only" value={newRating} readOnly />
				</div>
				{number && <div className="casino__rating-numbers">{rating} / 10</div>}
			</div>
		</>
	);
}

export default CasinoReview;
