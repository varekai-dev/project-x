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
				<meta name="robots" content="noindex" />
				<title>Cherry Bonus</title>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/favicon/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
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
							<a className="logo">
								<img src="/logo.svg" alt="Logo" width="150px" height="50px" />
							</a>
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
