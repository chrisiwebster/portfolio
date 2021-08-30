import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ title, children, logo, alt }) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.flexWrapper}>
				<h3>{title}</h3>
				<Image src={logo} alt={alt} />
			</div>

			{children}
		</div>
	);
}
