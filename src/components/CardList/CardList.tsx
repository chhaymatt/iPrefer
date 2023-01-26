import React, { useEffect, useState } from "react";
import styles from "./CardList.module.scss";
import { OptionProps } from "../../interfaces/OptionProps";
import Card from "../Card/Card";

interface OptionListProps {
	options: OptionProps[];
}
const data = [
	{
		name: "Valorant",
		gif: "https://media1.giphy.com/media/sUOkBnwf8157cVGE57/giphy.gif?cid=ecf05e4703e5a5ex62s18ss4j1acjuz0ewmds422kvnerxnu&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/5lZwY9B.png",
		backgroundImage: "https://i.imgur.com/DkNDM2i.jpg",
		logo: "https://i.imgur.com/UH4e9t5.png",
		learnMoreLink: "https://playvalorant.com/",
	},
	{
		name: "Fortnite",
		gif: "https://media2.giphy.com/media/EluFWEdnZtvqwZFTQH/giphy.gif?cid=ecf05e47vwlpu23b1ju0m0y4ji6vo2vc6c3obtf12ncehz0h&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/5Qb8qeh.png",
		backgroundImage: "https://i.imgur.com/LVDzV84.png",
		logo: "https://i.imgur.com/49cBs1z.png",
		learnMoreLink: "https://www.epicgames.com/fortnite/en-US/",
	},
	{
		name: "Dead by Daylight",
		gif: "https://media1.giphy.com/media/JmsU3a2B7IGwxpEqHR/giphy.gif?cid=ecf05e47zlycj5xmpeywvvp2o4m690xwqd552quuow8d60ys&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/GV3WHsB.png",
		backgroundImage: "https://i.imgur.com/vyj5DId.jpg",
		logo: "https://i.imgur.com/BRgsRFh.png",
		learnMoreLink: "https://deadbydaylight.com/",
	},
	{
		name: "League of Legends",
		gif: "https://media2.giphy.com/media/2sfHBti8mqSO5Bhlqq/giphy.gif?cid=ecf05e476wujgv4s76ash05itqp4jeisws06qq0enbaa9rcr&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/bldxoqU.png",
		backgroundImage: "https://i.imgur.com/3LzGOd5.jpg",
		logo: "https://i.imgur.com/pA1Gepg.png",
		learnMoreLink: "https://www.leagueoflegends.com/en-au/",
	},
	{
		name: "Stardew Valley",
		gif: "https://media2.giphy.com/media/ecNN1uKqgRaKs/giphy.gif?cid=ecf05e473sedlxv9erym4axxpenvwoq3sn98xalj56hxgkad&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/r1MOVFB.png",
		backgroundImage: "https://i.imgur.com/aguU78o.jpg",
		logo: "https://i.imgur.com/oxR8oRs.png",
		learnMoreLink: "https://www.stardewvalley.net/",
	},
	{
		name: "Raft",
		gif: "https://media.tenor.com/DeRaWfAyU5IAAAAC/shark-raft.gif",
		imagePop: "https://i.imgur.com/moB4SnZ.png",
		backgroundImage: "https://i.imgur.com/C1uNzJI.png",
		logo: "https://i.imgur.com/2yuwOfu.png",
		learnMoreLink: "https://raft-game.com/",
	},
	{
		name: "Minecraft",
		gif: "https://media3.giphy.com/media/HCLbhUDRzDxbUClyxl/giphy.gif?cid=ecf05e4738yrg17tul9c4rhj6vy3dqj3jc3rzjywu4phbo8x&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/ewMqnuK.png",
		backgroundImage: "https://i.imgur.com/UiuvuUH.jpg",
		logo: "https://i.imgur.com/2YaoeEV.png",
		learnMoreLink: "https://www.minecraft.net/en-us",
	},
	{
		name: "Among Us",
		gif: "https://media4.giphy.com/media/ZLAUOpqEMsqVYcuOWP/giphy.gif?cid=ecf05e47a8lygz2xg66t61c6z3nt1eyihhxdhil78772jloh&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/cEya7AE.png",
		backgroundImage: "https://i.imgur.com/KTjEgO1.jpg",
		logo: "https://i.imgur.com/Jth54Ix.png",
		learnMoreLink: "https://www.innersloth.com/games/among-us/",
	},
	{
		name: "Astroneer",
		gif: "https://media.tenor.com/pA5ZvEn_SiIAAAAC/astroneer-astronaut.gif",
		imagePop: "https://i.imgur.com/6Ioheyv.png",
		backgroundImage: "https://i.imgur.com/QIzqzJB.png",
		logo: "https://i.imgur.com/HuNzb8p.png",
		learnMoreLink: "https://astroneer.space/",
	},
	{
		name: "Rust",
		gif: "https://media3.giphy.com/media/ENcUVunGzRnrCBmua0/giphy.gif?cid=ecf05e471gi9dh08r4z2o4ezay4aj5uzikmccnw13djegg2t&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/Tl8Nnn9.png",
		backgroundImage: "https://i.imgur.com/dJ9qwSg.jpg",
		logo: "https://i.imgur.com/PY2S0Nj.png",
		learnMoreLink: "https://rust.facepunch.com/",
	},
	{
		name: "Roblox",
		gif: "https://media.tenor.com/-Eo0c-54770AAAAC/roblox-noob-roblox.gif",
		imagePop: "https://i.imgur.com/LPCZlYv.png",
		backgroundImage: "https://i.imgur.com/gL8uduN.jpg",
		logo: "https://i.imgur.com/L5nYqq1.png",
		learnMoreLink: "https://www.roblox.com/",
	},
	{
		name: "Overwatch 2",
		gif: "https://media3.giphy.com/media/STZnLEJxMIJ16qetcj/giphy.gif?cid=ecf05e47e38m641isfrlvxvdg4qoqy4o9pwb9ze2c5uviqrm&rid=giphy.gif&ct=g",
		imagePop: "https://i.imgur.com/aZIQzTl.png",
		backgroundImage: "https://i.imgur.com/HeChcUH.jpg",
		logo: "https://i.imgur.com/Qhnw7bt.png",
		learnMoreLink: "https://overwatch.blizzard.com/en-us/",
	},
];

const CardList: React.FC<OptionListProps> = () => {
	const cards = [...data];

	// Generate message
	const [message, setMessage] = useState({ main: "", secondary: "" });

	// Generate two random cards on load
	const [twoCards, setTwoCards] = useState([
		cards[Math.floor(Math.random() * cards.length)],
		cards[Math.floor(Math.random() * cards.length)],
	]);

	// Regenerate second card if they're the same
	while (twoCards[0] === twoCards[1]) {
		twoCards[1] = cards[Math.floor(Math.random() * cards.length)];
	}

	// Generate remaining cards by filtering the initial twoCards
	const [remainingCards, setRemainingCards] = useState(
		cards.filter((card) => !twoCards.includes(card))
	);

	// Restart cards
	const handleRestartClick = () => {
		const updatedTwoCards = [
			cards[Math.floor(Math.random() * cards.length)],
			cards[Math.floor(Math.random() * cards.length)],
		];

		while (updatedTwoCards[0] === updatedTwoCards[1]) {
			updatedTwoCards[1] =
				cards[Math.floor(Math.random() * cards.length)];
		}

		setTwoCards(updatedTwoCards);

		setRemainingCards(
			cards.filter((card) => !updatedTwoCards.includes(card))
		);
	};

	// Click a card
	const handleCardClick = (card: OptionProps, index: number) => {
		// Remove twoCards from remainingCards
		let updatedCards = remainingCards.filter(
			(remainingCard) => !twoCards.includes(remainingCard)
		);

		// Remember clicked card position and generate a new card from remainingCards
		const randomCard =
			updatedCards[Math.floor(Math.random() * updatedCards.length)];
		const updatedTwoCards = [
			index === 0 ? card : randomCard,
			index === 0 ? randomCard : card,
		];

		// Update twoCards and remainingCards after generating a random card
		setTwoCards(updatedTwoCards);
		setRemainingCards(
			updatedCards.filter(
				(remainingCard) => !updatedTwoCards.includes(remainingCard)
			)
		);

		// Set only one card if there are no more remainingCards
		if (updatedCards.length === 0) {
			setTwoCards([card]);
		}
	};

	useEffect(() => {
		if (twoCards.length === 1) {
			setMessage({
				main: `The winner is ${twoCards[0].name}!`,
				secondary: ``,
			});
		}
		if (remainingCards.length > 1) {
			setMessage({
				main: `Choose ${twoCards[0].name} or ${twoCards[1].name}.`,
				secondary: `${remainingCards.length} more options to go.`,
			});
		}

		if (remainingCards.length === 1) {
			setMessage({
				main: `Choose ${twoCards[0].name} or ${twoCards[1].name}.`,
				secondary: `${remainingCards.length} more option to go.`,
			});
		}

		if (remainingCards.length === 0 && twoCards.length > 1) {
			setMessage({
				main: `Choose ${twoCards[0].name} or ${twoCards[1].name}.`,
				secondary: `Last option.`,
			});
		}
	}, [remainingCards]);

	return (
		<>
			<button onClick={() => handleRestartClick()}>Restart</button>
			<h2>{message.main}</h2>
			<h3>{message.secondary}</h3>
			<div className={styles.CardList}>
				{twoCards.map((o, index) => (
					<Card
						name={o.name}
						gif={o.gif}
						imagePop={o.imagePop}
						backgroundImage={o.backgroundImage}
						logo={o.logo}
						learnMoreLink={o.learnMoreLink}
						key={index}
						onClick={() => handleCardClick(o, index)}
					/>
				))}
			</div>
			{remainingCards.length === 0 ? (
				""
			) : (
				<>
					<h2>Up next</h2>
					<ul>
						{remainingCards.map((o, index) => (
							<li>{o.name}</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default CardList;
