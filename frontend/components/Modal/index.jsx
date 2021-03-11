import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Modal.scss";
import clsx from "clsx";
import { AiOutlineCloseCircle } from "react-icons/Ai";

export default function TransitionsModal({ children }) {
	const [open, setOpen] = React.useState(false);

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
				classNameName="popup_modal"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className="popup">
						<div className="popup__top">
							<span className="popup__title">Bonus infos</span>
							<div className="popup__img">
								<img
									src="https://images.prismic.io/lucky7bonus%2F543f07f2-161e-412a-8fe8-6dff4f41f52d_bitcasino_banner.png"
									alt="Bitcasino banner"
									class="w-full"
								/>
							</div>
						</div>
						<div className="popup__text">
							Using the code LUCKY7, receive a free safety deposit box upon
							registration that can earn you up to $50. The player will have to
							make a first deposit before being able to collect his winnings.
							Gamdom now offers you the opportunity to bet on your favorite
							sports and athletic competitions.
						</div>
						<ul>
							<li className="text-base">
								<span className="font-bold">Wager&nbsp;:</span>&nbsp;No wager
							</li>
							<li className="text-base">
								<span className="font-bold">Min. deposit&nbsp;:</span>&nbsp;€10
							</li>
							<li className="text-base">
								<span className="font-bold">Max. bet&nbsp;:</span>&nbsp;No max.
								bet
							</li>
							<li className="text-base">
								<span className="font-bold">VPN&nbsp;allowed&nbsp;:</span>
								&nbsp;No
							</li>
							<li className="text-base">
								<span className="font-bold">
									Bonus hunt RAW&nbsp;allowed&nbsp;:
								</span>
								&nbsp;Yes
							</li>
							<li className="text-base">
								<span className="font-bold">
									Bonus hunt&nbsp;under&nbsp;bonus&nbsp;allowed&nbsp;:
								</span>
								&nbsp;Yes
							</li>
							<li className="text-base">
								<span className="font-bold">
									Cryptocurrencies allowed&nbsp;:
								</span>
								&nbsp;Yes
							</li>
						</ul>
						<div className="popup__btns">
							<div className="popup__btn popup__review">
								Read <strong>our review </strong>
							</div>
							<div className="popup__btn popup__bonus">
								Get your <strong>bonus now</strong>
							</div>
							<div className="popup__btn popup__close" onClick={handleClose}>
								Close
								<AiOutlineCloseCircle />
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</>
	);
}
