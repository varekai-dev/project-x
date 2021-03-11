import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/Bs";

function BreadCrumps({ second = null }) {
	return (
		<div className="post__breadcrumps">
			<Link href="/">
				<a className="post__breadcrump">
					Home
					<BsChevronRight />
				</a>
			</Link>

			{second && (
				<Link href="/casinos">
					<a className="post__breadcrump">
						{second} <BsChevronRight />
					</a>
				</Link>
			)}

			<span className="post__breadcrump">test</span>
		</div>
	);
}

export default BreadCrumps;
