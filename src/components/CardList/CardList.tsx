import { CardListProps } from "../../interfaces/props";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

const CardList: React.FC<CardListProps> = ({ cards, handleCardClick }) => {
	return (
		<div className={styles.CardList}>
			{cards.map((o, index) => (
				<Card
					label={o.label}
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
	);
};

export default CardList;
