import styles from "./Card.module.scss";
import { OptionProps } from "../../interfaces/props";

const Card: React.FC<OptionProps> = ({
	label,
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
						alt={label}
					/>
				</div>

				<h3 className={styles.Card__Name}>{label}</h3>
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
