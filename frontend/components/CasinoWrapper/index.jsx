import React from "react";
import "./casino.scss";
import BonusTerms from "./BonusTerms";
import Rating from "./Rating";
import Link from "next/link";
import clsx from "clsx";
import InfoBtn from "../Buttons/InfoBtn";

function CasinoWrapper({ review, post = false, main = false }) {
	return (
		<div
			className={clsx("casino__wrapper", review && "review", main && "main")}
		>
			<div className="casino_top">
				<div className="casino__img casino__item  ">
					<img
						src="https://images.prismic.io/lucky7bonus/248a8877-575d-44bb-8eab-e6325357aaa9_montecryptos.jpg"
						alt="logo"
					></img>
				</div>
				<a href="/" className="casino__name casino__item  ">
					<span>Montecryptos</span>
					<span>montecryptos.com</span>
				</a>
				<div className="casino__info bigger casino__item  ">
					<p>
						<strong>
							<span>+100%</span>
						</strong>
					</p>
					<p className="casino__info-small">
						up to <strong>€100</strong>
					</p>
				</div>
				{!post && <> {!review ? <BonusTerms /> : <Rating />}</>}
			</div>

			<div className="casino__info-btns casino__item ">
				<InfoBtn review={review} />
				{review && (
					<>
						<Link href="/">
							<a className="casino__review-link">
								{" "}
								Read our <strong>review</strong>{" "}
							</a>
						</Link>
					</>
				)}
				<a className="casino__info-btn ">
					Get your <strong>bonus now</strong>{" "}
				</a>
			</div>
		</div>
	);
}

export default CasinoWrapper;
