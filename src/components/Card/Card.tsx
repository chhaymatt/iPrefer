import styles from "./Card.module.scss";
import { OptionProps } from "../../interfaces/props";

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
		<div
			className={styles.Card}
			onClick={onClick}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}>
			<div className={styles.Card__Info}>
				<div className={styles.Card__BackgroundImage}>
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
			</div>
		</div>
	);
};

export default Card;
