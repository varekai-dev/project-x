import React from "react";

function BonusTerms() {
	return (
		<>
			<div className="casino__info bigger casino__item casino__item-top">
				<p>
					<strong>
						<span>+20</span>
					</strong>
				</p>
				<p className="casino__info-small">free spins</p>
			</div>
			<div className="casino__info">
				<p>
					<strong>
						<span>x35</span>
					</strong>
				</p>
				<p className="casino__info-small">Min.waget</p>
			</div>
			<div className="casino__info">
				<p>
					<strong>
						<span>€20</span>
					</strong>
				</p>
				<p className="casino__info-small">Min. deposit</p>
			</div>
			<div className="casino__info">
				<p>
					<strong>
						<span>€5</span>
					</strong>
				</p>
				<p className="casino__info-small">Max.bet</p>
			</div>
		</>
	);
}

export default BonusTerms;
