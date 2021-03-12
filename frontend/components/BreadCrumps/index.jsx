import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";
import "./breadcrumps.scss";

function BreadCrumps({ name }) {
	const router = useRouter();
	const address = router.pathname.split("/");
	const cutAddress = address.slice(1, address.lenght);
	console.log(cutAddress[0]);

	return (
		<div className="post__breadcrumps">
			<Link href="/">
				<a className="post__breadcrump">
					Home
					<BsChevronRight />
				</a>
			</Link>
			{cutAddress.length > 1 && (
				<Link href={`/${cutAddress[0]}`}>
					<a className="post__breadcrump">
						{cutAddress[0]} <BsChevronRight />
					</a>
				</Link>
			)}

			<span className="post__breadcrump">{name}</span>
		</div>
	);
}

export default BreadCrumps;
