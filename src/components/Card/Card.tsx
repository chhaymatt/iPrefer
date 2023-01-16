import React from "react";
import styles from "./Card.module.scss";
import { OptionProps } from "../../interfaces/OptionProps";

const Card: React.FC<OptionProps> = ({ name, image, learnMoreLink }) => {
	return (
		<div className={styles.Card}>
			<h2>{name}</h2>
			<img className={styles.Card__Image} src={image} alt={name} />
			<a
				className={styles.Card__LearnMore}
				target="_blank"
				href={learnMoreLink}>
				Learn more about {name}
			</a>
		</div>
	);
};

export default Card;
