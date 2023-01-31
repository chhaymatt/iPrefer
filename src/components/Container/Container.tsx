import styles from "./Container.module.scss";
import { useEffect, useState } from "react";
import { OptionListProps, OptionProps } from "../../interfaces/props";
import CardList from "../CardList/CardList";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Container: React.FC<OptionListProps> = ({ options }: OptionListProps) => {
	// Get unique cards
	const getUniqueCards = (cards: OptionProps[]) => {
		const firstCard = cards[Math.floor(Math.random() * cards.length)];
		const otherCards = cards.filter((card) => card !== firstCard);
		const secondCard =
			otherCards[Math.floor(Math.random() * otherCards.length)];
		return [firstCard, secondCard];
	};

	// Generate message
	const [message, setMessage] = useState({ main: "", secondary: "" });

	// Generate two random cards on load
	const [twoCards, setTwoCards] = useState(getUniqueCards(options));

	// Generate remaining cards by filtering the initial twoCards
	const [remainingCards, setRemainingCards] = useState(
		options.filter((card) => !twoCards.includes(card))
	);

	// Restart cards
	const handleRestartClick = () => {
		const newTwoCards = getUniqueCards(options);
		setTwoCards(newTwoCards);
		setRemainingCards(
			options.filter((card) => !newTwoCards.includes(card))
		);
	};

	// Click a card
	const handleCardClick = (clickedCard: OptionProps, index: number) => {
		// Generate random card and remember clicked card position
		const randomCard =
			remainingCards[Math.floor(Math.random() * remainingCards.length)];

		let newTwoCards = [...twoCards];
		newTwoCards[index] = clickedCard;
		newTwoCards[1 - index] = randomCard;

		// Save the twoCards and remainingCards
		setTwoCards(newTwoCards);
		setRemainingCards(
			remainingCards.filter(
				(remainingCard) => !newTwoCards.includes(remainingCard)
			)
		);

		// Save clicked card if there are no remainingCards
		if (remainingCards.length === 0) {
			setTwoCards([clickedCard]);
		}
	};

	useEffect(() => {
		if (twoCards.length === 1) {
			setMessage({
				main: `I prefer ${twoCards[0].label}!`,
				secondary: `Want to try again? Press the Restart button.`,
			});
		}
		if (remainingCards.length > 1) {
			setMessage({
				main: `${twoCards[0].label} or ${twoCards[1].label}?`,
				secondary: `${remainingCards.length} more options to go.`,
			});
		}

		if (remainingCards.length === 1) {
			setMessage({
				main: `${twoCards[0].label} or ${twoCards[1].label}?`,
				secondary: `${remainingCards.length} more option to go.`,
			});
		}

		if (remainingCards.length === 0 && twoCards.length > 1) {
			setMessage({
				main: `${twoCards[0].label} or ${twoCards[1].label}?`,
				secondary: `Last option.`,
			});
		}
	}, [remainingCards]);

	return (
		<div className={styles.Container}>
			{/* <div className={styles.SelectContainer}>
				<h2>Select options</h2>
				<Select
					className={styles.Select}
					options={options}
					isMulti
					components={makeAnimated()}></Select>
			</div> */}
			<button onClick={handleRestartClick}>Restart</button>
			<h2>{message.main}</h2>
			<h3>{message.secondary}</h3>
			<CardList cards={twoCards} handleCardClick={handleCardClick} />
			{remainingCards.length === 0 ? (
				""
			) : (
				<>
					<h2>Up next</h2>
					<ul className={styles.UpNext}>
						{remainingCards.map((o, index) => (
							<li key={index}>{o.label}</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Container;
