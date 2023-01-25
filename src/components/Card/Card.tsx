import React from "react";
import styles from "./Card.module.scss";
import { OptionProps } from "../../interfaces/OptionProps";

const Card: React.FC<OptionProps> = ({
	name,
	image,
	learnMoreLink,
	onClick,
}) => {
	return (
		<div className={styles.Card} onClick={onClick}>
			<h3>{name}</h3>
			<img className={styles.Card__Image} src={image} alt={name} />
			{/* <a
				className={styles.Card__LearnMore}
				target="_blank"
				href={learnMoreLink}>
				Learn more about {name}
			</a> */}
		</div>
	);
};

export default Card;
