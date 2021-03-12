import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Modal.scss";
import { AiOutlineCloseCircle } from "react-icons/Ai";

export default function TransitionsModal({ children, info }) {
	console.log(info);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className="popup__btn" onClick={handleOpen}>
				{children}
			</div>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="popup_modal"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					{info && (
						<div className="popup">
							<div className="popup__top">
								<span className="popup__title">Bonus infos</span>
								<div className="popup__img">
									<img
										src={`http://localhost:1337${info.Overlay.url}`}
										alt={info.title}
									/>
								</div>
							</div>
							<div className="popup__text">{info.bonuses[0].bonusInfo}</div>
							<ul>
								<li className="text-base">
									<span className="font-bold">Wager&nbsp;:</span>&nbsp;x
									{info.bonuses[0].wager}
								</li>
								<li className="text-base">
									<span className="font-bold">Min. deposit&nbsp;:</span>
									&nbsp;€{info.bonuses[0].amount}
								</li>
								<li className="text-base">
									<span className="font-bold">Max. bet&nbsp;:</span>&nbsp; €
									{info.bonuses[0].maxBet}
								</li>
								<li className="text-base">
									<span className="font-bold">VPN&nbsp;allowed&nbsp;:</span>
									&nbsp;{info.bonuses[0].vpnAllowed ? "Yes" : "No"}
								</li>
								<li className="text-base">
									<span className="font-bold">
										Bonus hunt RAW&nbsp;allowed&nbsp;:
									</span>
									&nbsp;{info.bonuses[0].bonusHuntAllowed ? "Yes" : "No"}
								</li>
								<li className="text-base">
									<span className="font-bold">
										Bonus hunt&nbsp;under&nbsp;bonus&nbsp;allowed&nbsp;:
									</span>
									&nbsp;{info.bonuses[0].bonusHuntUnderBonus ? "Yes" : "No"}
								</li>
								<li className="text-base">
									<span className="font-bold">
										Cryptocurrencies allowed&nbsp;:
									</span>
									&nbsp;{info.bonuses[0].cryptocurrencies ? "Yes" : "No"}
								</li>
							</ul>
							<div className="popup__btns">
								<div className="popup__btn popup__review">
									Read <strong>our review </strong>
								</div>
								<a
									href={info.affiliateLink}
									className="popup__btn popup__bonus"
								>
									Get your <strong>bonus now</strong>
								</a>
								<div className="popup__btn popup__close" onClick={handleClose}>
									Close
									<AiOutlineCloseCircle />
								</div>
							</div>
						</div>
					)}
				</Fade>
			</Modal>
		</>
	);
}
