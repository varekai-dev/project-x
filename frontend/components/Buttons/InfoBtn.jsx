import React, { useState } from "react";
import Modal from "../Modal";
import clsx from "clsx";

function InfoBtn({ review }) {
	const [modal, showModal] = useState(false);
	return (
		<>
			<Modal active={modal}>
				{" "}
				<div
					onClick={() => showModal(!modal)}
					className={clsx(
						"casino__info-info  casino__item casino__item-prelast",
						review && "grey"
					)}
				>
					<svg>
						<title>Infos</title>
						<use xlinkHref="/icons.svg#info"></use>
					</svg>
				</div>
			</Modal>
		</>
	);
}

export default InfoBtn;
