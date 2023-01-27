import { useEffect, useState } from "react";
import styles from "./CardList.module.scss";
import { OptionProps } from "../../interfaces/OptionProps";
import Card from "../Card/Card";

interface OptionListProps {
	options: OptionProps[];
}

const CardList: React.FC<OptionListProps> = ({ options }: OptionListProps) => {
	const cards = [...options];

	// Get unique cards
	const getUniqueCards = (array: Array<OptionProps>) => {
		const firstCard = array[Math.floor(Math.random() * array.length)];
		let secondCard = array[Math.floor(Math.random() * array.length)];

		while (firstCard === secondCard) {
			secondCard = array[Math.floor(Math.random() * array.length)];
		}

		return [firstCard, secondCard];
	};

	// Generate message
	const [message, setMessage] = useState({ main: "", secondary: "" });

	// Generate two random cards on load
	const [twoCards, setTwoCards] = useState(() => getUniqueCards(cards));

	// Generate remaining cards by filtering the initial twoCards
	const [remainingCards, setRemainingCards] = useState(
		cards.filter((card) => !twoCards.includes(card))
	);

	// Restart cards
	const handleRestartClick = () => {
		const newTwoCards = getUniqueCards(cards);
		setTwoCards(newTwoCards);
		setRemainingCards(cards.filter((card) => !newTwoCards.includes(card)));
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
				main: `I prefer ${twoCards[0].name}!`,
				secondary: `Want to try again? Press the Restart button.`,
			});
		}
		if (remainingCards.length > 1) {
			setMessage({
				main: `${twoCards[0].name} or ${twoCards[1].name}?`,
				secondary: `${remainingCards.length} more options to go.`,
			});
		}

		if (remainingCards.length === 1) {
			setMessage({
				main: `${twoCards[0].name} or ${twoCards[1].name}?`,
				secondary: `${remainingCards.length} more option to go.`,
			});
		}

		if (remainingCards.length === 0 && twoCards.length > 1) {
			setMessage({
				main: `${twoCards[0].name} or ${twoCards[1].name}?`,
				secondary: `Last option.`,
			});
		}
	}, [remainingCards]);

	return (
		<div className={styles.Container}>
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
					<ul className={styles.UpNext}>
						{remainingCards.map((o, index) => (
							<li key={index}>{o.name}</li>
							// <Card
							// 	name={o.name}
							// 	gif={o.gif}
							// 	imagePop={o.imagePop}
							// 	backgroundImage={o.backgroundImage}
							// 	logo={o.logo}
							// 	learnMoreLink={o.learnMoreLink}
							// 	key={index}
							// 	onClick={() => handleCardClick(o, index)}
							// />
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default CardList;
