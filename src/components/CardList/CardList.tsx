import React from "react";
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
];

const CardList: React.FC<OptionListProps> = () => {
	return (
		<div className={styles.CardList}>
			{data.map((o, index) => (
				<Card
					name={o.name}
					image={o.image}
					learnMoreLink={o.learnMoreLink}
					key={index}
				/>
			))}
		</div>
	);
};

export default CardList;
