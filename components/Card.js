import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ title, children, logo, alt, className, home }) {
	return (
		<div className={styles.cardContainer}>
			<div className={!className && styles.flexWrapper}>
				<h3>{title}</h3>
				<Image src={logo} alt={alt} className={className} />
			</div>
			{children}
		</div>
	);
}
