import "./casinos.scss";
import Layout from "../../components/WebLayout";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import CasinoWrapper from "../../components/CasinoWrapper";
import ContentBox from "../../components/ContentBox";
export default function Casinos() {
	return (
		<Layout>
			<section className="casino__page">
				<div className="container">
					<div className="casino__page-inner">
						<div className="casino__page-title">
							<h1>
								<strong>
									The greatest online casinos are on Lucky7Bonus.com
								</strong>
							</h1>
							<h3>
								Compare the features, bonuses, slots and game providers of the
								best casinos online thanks to reviews of our beloved players and
								staff members.
							</h3>
						</div>
						<div className="casinos__list">
							<CasinoWrapper review={true} />
							<CasinoWrapper review={true} />
							<CasinoWrapper review={true} />
							<CasinoWrapper review={true} />
							<CasinoWrapper review={true} />
						</div>
					</div>
				</div>
			</section>
			<ContentBox />
			<ContactForm />
		</Layout>
	);
}
