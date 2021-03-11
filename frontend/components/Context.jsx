import React, { createContext } from "react";

export const MainContext = createContext();

function Context({ children }) {
	const heroText = [
		{
			text: "Turnkey esports solutions",
		},
		{
			text: "Custom Software development",
		},
		{
			text: "News aggregator and portal",
		},
		{
			text: "Wagering and gaming",
		},
		{
			text: "Data and Analytics",
		},
	];
	const mainText = [
		{
			description: `X-Bet.co launched in 2017, and is one of the leading esports betting brands globally. In 2020 X-BET changed its name to XB Systems, and rebranded its X-Bet.co brand to BUFF.bet 
    `,
			id: 1,
		},

		{
			description: `Our experience in the market has shown us that esports fans interact in a different way to traditional sports betting customers, and want more than just a betting platform

    `,
			id: 2,
		},
	];
	const tabContent = [
		{
			description: `1. To perfect the hybrid sportsbook model where all forms of betting can be found in one place as an “all in one” betting station.

    `,
			tabId: 1,
		},
		{
			description: `2. Take a page from the enormous success of mobile games by adding achievements, milestones, login rewards and internal notifications to take player loyalty to the next level.
			`,
			tabId: 2,
		},
		{
			description: `3. Media portal to differentiate brand, increase user base and lower CPA, engage our existing and potential customers into non-betting activities, cross sell opportunities and strengthen overall user engagement within the Buff eco system.

			`,
			tabId: 3,
		},
		{
			description: `4. Lowering the costs of player acquisition, increasing exposure and generating social media friendly content that is non-betting related.
			 `,
			tabId: 4,
		},
		{
			description: `5. Implementation of cutting-edge technologies on the Buff.bet platform, such as  Back-End algorithms, SQL Caching, Data Base optimization, Brotli and gzip Compression, WebP Images, updating Caching Strategies; giving users a lightning fast and visually stunning gaming experience.
			`,
			tabId: 5,
		},
		{
			description: `6. Develop a dynamic loyalty program and mobile games-like activities, achievements and milestones to further engage and cross-sell each customer above and beyond the usual betting-only model. Resulting in higher user engagement and increasing the Live Time Value  (LTV) of the customer.

			`,
			tabId: 6,
		},
	];

	const section3 = [
		{
			description: `Purpose-built esports betting platform, asset fully acquired from market leading esports developer UltraPlay, enhancing the user experience for Buff.bet players.
			`,
			id: 1,
		},
		{
			description: `BUFFHUB an in-house developed esports news aggregator platform, enabling esports community traffic and engagement, facilitating cross sales opportunities to Buff.bet.

			`,
			id: 2,
		},
		{
			description: `Gives competitive advantage against other esports betting operators on third-party platforms.
			`,
			id: 3,
		},
		{
			description: `In-house developed affiliate software to enhance the affiliate experience.
			`,
			id: 4,
		},
	];

	const timeStamps = [
		{
			description: "X-Bet.co Launched",
			date: "October 2017",
			timeStampId: 1,
		},
		{
			description: "BUFF.bet Launched",
			date: "April 2018",
			timeStampId: 2,
		},
		{
			description: `Agreement Signed February 2020; \n\n
			 Merger completed  April 2020`,
			date: "April 2020",
			timeStampId: 3,
		},
		{
			description: "BuffHUB Launched",
			date: "April 2020",
			timeStampId: 4,
		},
		{
			description:
				"Establishment of Isle Of Man based holding company XB Vision Technology LTD",
			date: "June 2020",
			timeStampId: 5,
		},
		{
			description: "IPO on ViennaStock Exchange",
			date: "Q1 2021",
			timeStampId: 6,
		},
		{
			description: "New Product Launches",
			date: "2021 Onwards",
			timeStampId: 7,
		},
	];

	const ourBrands = [
		{
			img: "/images/about-us/buff.png",
			link: "/buff-bet",
			description: "more info",
			id: 1,
		},
		{
			img: "/images/about-us/BuffHub.png",
			link: "/buffhub",
			description: "more info",
			id: 2,
		},
	];

	const esportsBoxes = [
		{
			img: "/images/home/box-1.png",
			title: "Fast Growing",
			text:
				"It is the fastest growing sports product globally in terms of participation, viewership and prize money",
			id: 1,
			color: "blue",
			delay: 0,
		},
		{
			img: "/images/home/box-2.png",
			title: "High Profile",
			text:
				"Prize money reached $220m in 2019, with prize money in major tournaments surpassing that of traditional sports",
			id: 2,
			color: "orange",
			delay: 300,
		},
		{
			img: "/images/home/box-3.png",
			title: "Attractive Demographics",
			text:
				"esports appeals to key demographics that products struggle to interact with",
			id: 3,
			color: "purple",
			delay: 600,
		},
		{
			img: "/images/home/box-4.png",
			title: "Geographically Diverse",
			text:
				"While esports is particularly popular in Asia and the USA, it has become a truly global product",
			id: 4,
			color: "green",
			delay: 900,
		},
	];
	const bettingList = [
		{
			text:
				"Betting revenues are excluded from the estimated $1.1bn market size, and although it remains a minor part of the esports eco-system, it is growing strongly",
			id: 1,
		},
		{
			text:
				"Traditional bookmakers have started to focus on the esports market, given its strong growth and future potential, but they don’t understand esports customers in the same way as esports betting sites",
			id: 2,
		},
	];
	const buffhubMain = [
		{
			text:
				"Reduce marketing cost through shifting some advertising to non-gambling category;",
			id: 1,
		},
		{
			text: "Increase brand awareness and loyalty to drive traffic;",
			id: 2,
		},
		{
			text:
				"One profile for BUFFHUB and BUFF.bet to increase proportion of depositing users;",
			id: 3,
		},
		{
			text: "Allows to advertise in search engines and Social Medias",
			id: 4,
		},
		{
			text:
				"Users can consume detailed information about the esports world (e.g. ranking, predictions, news, etc.)",
			id: 5,
		},
	];

	const buffhubBox = [
		{
			img: "/images/buffhub/paint.png",
			text: "Modern gaming design",
			id: 1,
			delay: 0,
		},
		{
			img: "/images/buffhub/rank.png",
			text: "Own ranking system",
			id: 2,
			delay: 300,
		},
		{
			img: "/images/buffhub/commerce.png",
			text: "Community oriented",
			id: 3,
			delay: 600,
		},
	];
	const buffhubFunnelSteps = [
		{
			text: "Visits to media portal BUFFHUB",
		},
		{
			text: "Cross-sell visitors to BUFF.bet betting site",
		},
		{
			text: "Registrations on BUFF.bet",
		},
		{
			text: "First Time Depositing Players",
		},
		{
			text: "Retained Depositing Players",
		},
	];

	const advantage = [
		{
			image: "/images/buff/mouse.png",
			alt: "mouse",
			numbers: 34,
			text: "Games covered",
		},
		{
			image: "/images/buff/events.png",
			alt: "party",
			numbers: 6000,
			text: "Monthly events",
		},
		{
			image: "/images/buff/elipse.png",
			alt: "elipse",
			numbers: 5500,
			text: "Live events",
		},
		{
			image: "/images/buff/grow.png",
			alt: "grow",
			numbers: 200,
			text: "Markets",
		},
	];

	const advantageSports = [
		{
			image: "/images/buff/ball.png",
			alt: "mouse",
			numbers: 50,
			text: "Sports",
		},
		{
			image: "/images/buff/events.png",
			alt: "party",
			numbers: 30000,
			text: "Monthly events",
		},

		{
			image: "/images/buff/grow.png",
			alt: "grow",
			numbers: 2000,
			text: "Markets",
		},
	];
	const info = [
		{
			title: "Monthly Promotion",
			text:
				"To top it all off, we do monthly theme-park style promotions to keep it all interesting and we dish out daily betting predictions on our active Social media and blogs.",
			image: "/images/buff/calendar.png",
		},
		{
			title: "Our Support",
			text:
				"Our support quality boasts an incredible 94% satisfaction in our live chat services from thousands of ratings that our clients leave for us.",
			image: "/images/buff/work.png",
		},
	];
	const store = {
		mainText,
		tabContent,
		section3,
		timeStamps,
		ourBrands,
		esportsBoxes,
		bettingList,
		buffhubMain,
		buffhubBox,
		buffhubFunnelSteps,
		heroText,
		advantage,
		advantageSports,
		info,
	};
	return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
}

export default Context;
