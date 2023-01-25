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
		image: "https://media1.giphy.com/media/sUOkBnwf8157cVGE57/giphy.gif?cid=ecf05e4703e5a5ex62s18ss4j1acjuz0ewmds422kvnerxnu&rid=giphy.gif&ct=g",
		learnMoreLink: "https://playvalorant.com/",
	},
	{
		name: "Fortnite",
		image: "https://media2.giphy.com/media/EluFWEdnZtvqwZFTQH/giphy.gif?cid=ecf05e47vwlpu23b1ju0m0y4ji6vo2vc6c3obtf12ncehz0h&rid=giphy.gif&ct=g",
		learnMoreLink: "https://www.epicgames.com/fortnite/en-US/",
	},
	{
		name: "Dead by Daylight",
		image: "https://media1.giphy.com/media/JmsU3a2B7IGwxpEqHR/giphy.gif?cid=ecf05e47zlycj5xmpeywvvp2o4m690xwqd552quuow8d60ys&rid=giphy.gif&ct=g",
		learnMoreLink: "https://deadbydaylight.com/",
	},
	{
		name: "League of Legends",
		image: "https://media2.giphy.com/media/2sfHBti8mqSO5Bhlqq/giphy.gif?cid=ecf05e476wujgv4s76ash05itqp4jeisws06qq0enbaa9rcr&rid=giphy.gif&ct=g",
		learnMoreLink: "https://www.leagueoflegends.com/en-au/",
	},
	{
		name: "Stardew Valley",
		image: "https://media2.giphy.com/media/ecNN1uKqgRaKs/giphy.gif?cid=ecf05e473sedlxv9erym4axxpenvwoq3sn98xalj56hxgkad&rid=giphy.gif&ct=g",
		learnMoreLink: "https://www.stardewvalley.net/",
	},
	{
		name: "Raft",
		image: "https://media.tenor.com/DeRaWfAyU5IAAAAC/shark-raft.gif",
		learnMoreLink: "https://raft-game.com/",
	},
	{
		name: "Minecraft",
		image: "https://media3.giphy.com/media/HCLbhUDRzDxbUClyxl/giphy.gif?cid=ecf05e4738yrg17tul9c4rhj6vy3dqj3jc3rzjywu4phbo8x&rid=giphy.gif&ct=g",
		learnMoreLink: "https://www.minecraft.net/en-us",
	},
	{
		name: "Project Zomboid",
		image: "https://media.tenor.com/befJ-V8B0Y0AAAAd/project-zomboid-project-z.gif",
		learnMoreLink: "https://projectzomboid.com/",
	},
	{
		name: "Astroneer",
		image: "https://media.tenor.com/pA5ZvEn_SiIAAAAC/astroneer-astronaut.gif",
		learnMoreLink: "https://astroneer.space/",
	},
	{
		name: "ARK: Survival Evolved",
		image: "https://media2.giphy.com/media/hYVgwjqQaQeOI/giphy.gif?cid=ecf05e47zqg83w3rwhu6wbvemccnd4r9xn3xaaetk5b96m30&rid=giphy.gif&ct=g",
		learnMoreLink: "https://playark.com/",
	},
	{
		name: "Rust",
		image: "https://media3.giphy.com/media/ENcUVunGzRnrCBmua0/giphy.gif?cid=ecf05e471gi9dh08r4z2o4ezay4aj5uzikmccnw13djegg2t&rid=giphy.gif&ct=g",
		learnMoreLink: "https://rust.facepunch.com/",
	},
	{
		name: "Roblox",
		image: "https://media.tenor.com/-Eo0c-54770AAAAC/roblox-noob-roblox.gif",
		learnMoreLink: "https://www.roblox.com/",
	},
	{
		name: "World of Warcraft",
		image: "https://media1.giphy.com/media/21PeokB8uIQvjIhVO5/giphy.gif?cid=ecf05e47yzhuz7qnb38o6616x1hqwz9vrhxjx38kv2topbpd&rid=giphy.gif&ct=g",
		learnMoreLink: "https://worldofwarcraft.com/en-us/",
	},
	{
		name: "Runescape",
		image: "https://media2.giphy.com/media/XxqDdWZYXGHtfx1uO8/giphy.gif?cid=ecf05e47b2bs1zo4yr55il4ats1ke9alcqvf2ckxr796xdqv&rid=giphy.gif&ct=g",
		learnMoreLink: "https://play.runescape.com/",
	},
	{
		name: "Overwatch 2",
		image: "https://media3.giphy.com/media/STZnLEJxMIJ16qetcj/giphy.gif?cid=ecf05e47e38m641isfrlvxvdg4qoqy4o9pwb9ze2c5uviqrm&rid=giphy.gif&ct=g",
		learnMoreLink: "https://overwatch.blizzard.com/en-us/",
	},
	{
		name: "Among Us",
		image: "https://media4.giphy.com/media/ZLAUOpqEMsqVYcuOWP/giphy.gif?cid=ecf05e47a8lygz2xg66t61c6z3nt1eyihhxdhil78772jloh&rid=giphy.gif&ct=g",
		learnMoreLink: "https://www.innersloth.com/games/among-us/",
	},
];

const CardList: React.FC<OptionListProps> = () => {
	const cards = [...data];

	const [winner, setWinner] = useState({
		name: "",
		image: "",
		learnMoreLink: "",
	});

	// Generate two random cards
	const [twoCards, setTwoCards] = useState([
		cards[Math.floor(Math.random() * cards.length)],
		cards[Math.floor(Math.random() * cards.length)],
	]);

	// Generate new two random cards if they're the same
	while (twoCards[0] === twoCards[1]) {
		twoCards[1] = cards[Math.floor(Math.random() * cards.length)];
	}

	const [remainingCards, setRemainingCards] = useState(
		cards.filter((card) => !twoCards.includes(card))
	);

	const handleRestartClick = () => {
		setTwoCards([
			cards[Math.floor(Math.random() * cards.length)],
			cards[Math.floor(Math.random() * cards.length)],
		]);

		while (twoCards[0] === twoCards[1]) {
			twoCards[1] = cards[Math.floor(Math.random() * cards.length)];
		}

		setRemainingCards(cards.filter((card) => !twoCards.includes(card)));
	};

	// Generate remaining cards by filtering the initial twoCards

	const handleCardClick = (card: OptionProps) => {
		const updatedCards = remainingCards.filter(
			(remainingCard) => remainingCard !== card
		);
		console.log(card.name, updatedCards);
		setRemainingCards(updatedCards);
		if (updatedCards.length === 0) {
			setTwoCards([card]);
		} else {
			setTwoCards([
				card,
				remainingCards[
					Math.floor(Math.random() * remainingCards.length)
				],
			]);
		}
	};

	return (
		<>
			<button onClick={() => handleRestartClick()}>Restart</button>
			<h2>
				{remainingCards.length === 0
					? `${twoCards[0].name} has won!`
					: `Choose... ${remainingCards.length} to go`}
			</h2>
			<div className={styles.CardList}>
				{twoCards.map((o, index) => (
					<Card
						name={o.name}
						image={o.image}
						learnMoreLink={o.learnMoreLink}
						key={index}
						onClick={() => handleCardClick(o)}
					/>
				))}
			</div>
			{remainingCards.length === 0 ? (
				""
			) : (
				<>
					<h2>Up next</h2>
					<div className={styles.CardList}>
						{remainingCards.map((o, index) => (
							<Card
								name={o.name}
								image={o.image}
								learnMoreLink={o.learnMoreLink}
								key={index}
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default CardList;
