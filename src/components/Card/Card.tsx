import React from "react";
import styles from "./Card.module.scss";
import { OptionProps } from "../../interfaces/OptionProps";

const Card: React.FC<OptionProps> = ({
	name,
	gif,
	imagePop,
	backgroundImage,
	logo,
	learnMoreLink,
	onClick,
}) => {
	return (
		<div className={styles.Card} onClick={onClick}>
			<div
				className={styles.Card__BackgroundImage}
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}>
				<img
					className={styles.Card__ImagePop}
					src={imagePop}
					alt={name}
				/>
			</div>
			<h3 className={styles.Card__Name}>{name}</h3>
			<div
				className={styles.Card__Logo}
				style={{
					backgroundImage: `url(${logo})`,
				}}></div>
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
