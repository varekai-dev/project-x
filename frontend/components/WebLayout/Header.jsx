import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { nav } from "../navigation/navLinks";

function Header() {
	const [show, handleShow] = useState(false);
	const [menu, showMenu] = useState(false);
	const router = useRouter();

	const handleMenu = () => {
		showMenu(!menu);
	};
	const transitionNavBar = () => {
		if (window.scrollY > 80) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => {
			window.removeEventListener("scroll", transitionNavBar);
		};
	}, []);
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;0,900;1,400&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<header
				className={clsx("header", show && "active", menu && "nav__btn--active")}
			>
				<div className="container">
					<div className="header__inner">
						<Link href="/">
							<div className="logo">Logo</div>
						</Link>
						<div
							className={clsx("nav__btn", menu && "active")}
							onClick={handleMenu}
						>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<nav className="nav">
							<ul className={clsx("nav__list", menu && "active")}>
								{nav.map((link) => (
									<li
										key={link.id}
										className={clsx(router.pathname == link.href && "active")}
									>
										<Link href={link.href}>{link.name}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;
