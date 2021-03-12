import { useState, useEffect, useContext } from "react";
import "./index.scss";
import Layout from "../components/WebLayout";
import ContactForm from "../components/ContactForm";
import CasinoWrapper from "../components/CasinoWrapper";
import InfoBtn from "../components/Buttons/InfoBtn";
import axios from "axios";
import { MainContext } from "../components/Context";

export default function Home() {
	const { contactInfo } = useContext(MainContext);
	const [data, setData] = useState([]);
	useEffect(async () => {
		try {
			const response = await axios.get("http://localhost:1337/casinos");
			const data = await response.data;
			setData(data);
		} catch (e) {
			console.error(e);
		}
	}, []);
	return (
		<Layout>
			<section className="head">
				<div className="container">
					<div className="head__inner">
						<h1 className="head__title">
							Compare the Best Online Casinos & Deposit Bonuses
						</h1>
						<h3 className="head__subtitle">
							Benefits from exclusive bonus offers for your favorite casinos and
							slots
						</h3>
						<div className="head__top">
							<div className="head__top-2">
								{data &&
									data
										.filter(
											(casino, index) => casino.topCasinos.length && index < 2
										)
										.map((casino) => (
											<div className="head__box">
												<div
													className="head__box-img"
													style={{
														backgroundImage: `url(http://localhost:1337${casino.Overlay.url})`,
													}}
												></div>
												<div className="head__box-logo">
													<img
														src={`http://localhost:1337${casino.logo.url}`}
														alt={casino.title}
													/>
												</div>
												<div className="head__box-number">
													{casino.topCasinos[0].place}
												</div>
												<div className="head__box-bonuses">
													<div className="head__box-bonus">
														<div>{casino.bonuses[0].percentage}%</div>
														<div>up to {casino.bonuses[0].amount}€</div>
													</div>
												</div>
												<div className="head__box-btns">
													<div className="head__box-info">
														<InfoBtn info={casino} />
													</div>
													<a
														href={casino.affiliateLink}
														className="head__box-btn"
													>
														<div> Get your</div>
														<div>
															{" "}
															<strong>bonus now</strong>
														</div>
														<svg>
															<use xlinkHref="/icons.svg#chevrons"></use>
														</svg>
													</a>
												</div>
											</div>
										))}
							</div>
							<div className="head__top-4">
								{data &&
									data
										.filter(
											(casino, index) =>
												casino.topCasinos.length && index > 1 && index < 5
										)
										.map((casino) => (
											<div className="head__box">
												<div
													className="head__box-img"
													style={{
														backgroundImage: `url(http://localhost:1337${casino.Overlay.url})`,
													}}
												>
													<div className="head__box-img-overlay"></div>
												</div>
												<div className="head__box-logo">
													<img
														src={`http://localhost:1337${casino.logo.url}`}
														alt={casino.title}
													/>
												</div>
												<div className="head__box-number">
													{casino.topCasinos[0].place}
												</div>
												<div className="head__box-bonuses">
													<div className="head__box-bonus">
														<div>{casino.bonuses[0].percentage}%</div>
														<div>up to {casino.bonuses[0].amount}€</div>
													</div>
												</div>
												<div className="head__box-btns">
													<div className="head__box-info">
														<InfoBtn info={casino} />
													</div>
													<a
														href={casino.affiliateLink}
														className="head__box-btn"
													>
														<div> Get your</div>
														<div>
															{" "}
															<strong>bonus now</strong>
														</div>
														<svg>
															<use xlinkHref="/icons.svg#chevrons"></use>
														</svg>
													</a>
												</div>
											</div>
										))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="casinos">
				<div className="container">
					<div className="casinos__inner">
						<div className="casino__title">
							<h2>{contactInfo.name} Online Casinos selection</h2>
							<h3>
								Curated list of the best Free Spins &amp; Free Deposit Bonuses
								available
							</h3>
						</div>
						<div className="casino__list">
							{data &&
								data
									.filter((casino) => !casino.topCasinos.length)
									.map((casino) => (
										<CasinoWrapper
											review={false}
											main={true}
											key={casino.id}
											info={casino}
										/>
									))}
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
		</Layout>
	);
}
