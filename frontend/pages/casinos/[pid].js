import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "./post.scss";
import Layout from "../../components/WebLayout";
import ContactForm from "../../components/ContactForm";
import CasinoWrapper from "../../components/CasinoWrapper";
import { AiTwotoneStar } from "react-icons/Ai";
import { BsCalendar } from "react-icons/Bs";
import { RiMoneyEuroCircleLine } from "react-icons/Ri";
import { GiLaurelCrown } from "react-icons/Gi";
import clsx from "clsx";
import BreadCrumps from "../../components/BreadCrumps";

function Post() {
	const bonus = useRef(null);
	// const distance = bonus.getBoundingClientRect();
	// console.log(distance);
	const [show, handleShow] = useState(false);
	const transitionNavBar = () => {
		if (window.scrollY > 200) {
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
	const router = useRouter();
	const { pid } = router.query;
	return (
		<Layout>
			<div className="post">
				<div className="container">
					<div className="post__inner">
						<BreadCrumps href="/casinos" second="Casinos" />
						<div
							className="post__title"
							style={{
								backgroundImage:
									"url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
							}}
						>
							{pid}
						</div>
						<div className="post__content">
							<div className="post__left">
								<CasinoWrapper post={true} review={false} />
								<div className="post__text">
									<h1>
										<strong>Opinions on Jack21</strong>
									</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>

									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<img
										src="https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png"
										alt="s'inscrire sur Jack21"
									></img>
									<h2>
										<strong>Games and suppliers at Jack21</strong>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa
										aspernatur deserunt, reiciendis illo voluptatem incidunt
										suscipit rem! Velit sapiente eveniet eum pariatur libero?
									</p>
								</div>
							</div>
							<div className="post__right">
								<div className="post__company-info">
									<h3>Quickfacts on Jack21</h3>
									<div className="company__line">
										<div className="company__line-left">
											<GiLaurelCrown /> Owner
										</div>
										<div className="company__line-right">Somebody</div>
									</div>
									<div className="company__line">
										<div className="company__line-left">
											<BsCalendar />
											Founded
										</div>
										<div className="company__line-right">2020-01-01</div>
									</div>
									<div className="company__line">
										<div className="company__line-left">
											<RiMoneyEuroCircleLine />
											Min. deposit
										</div>
										<div className="company__line-right">€30</div>
									</div>
								</div>
								<div className="post__rating">
									<h3>What we think about {pid}</h3>
									<div className="post__rating-line">
										<div className="rating-line-left">Bonuses</div>
										<div className="rating-line-right">
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
									</div>
									<div className="post__rating-line">
										<div className="rating-line-left">Website</div>
										<div className="rating-line-right">
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
									</div>
									<div className="post__rating-line">
										<div className="rating-line-left">Game providers</div>
										<div className="rating-line-right">
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
									</div>
									<div className="post__rating-line">
										<div className="rating-line-left">Payment providers</div>
										<div className="rating-line-right">
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
									</div>
									<div className="post__rating-line">
										<div className="rating-line-left">Support</div>
										<div className="rating-line-right">
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
									</div>
									<div className="post__rating-global">
										<div>Note global</div>
										<div>
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
											<AiTwotoneStar />
										</div>
										<div>8.20 / 10</div>
									</div>
								</div>

								<div className="post__contactform">
									<ContactForm />
								</div>
							</div>
						</div>
						<div className={clsx("post__fixed", show && "active")}>
							<CasinoWrapper post={true} review={false} />
						</div>
						<div ref={bonus} className="test"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Post;
