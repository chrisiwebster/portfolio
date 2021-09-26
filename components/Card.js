import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ title, children, logo, alt, className }) {
	return (
		<div className={styles.cardContainer}>
			<div className={!className && styles.flexWrapper}>
				<div className={styles.contentWrapper}>
					<h3>{title}</h3>
					{children}
				</div>
				<Image src={logo} alt={alt} className={className} />
			</div>
		</div>
	);
}
