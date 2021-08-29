import styles from "../styles/Card.module.css";

export default function Card({ title, children, start, end, jobTitle }) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.flexWrapper}>
				<h2>{title}</h2>
			</div>
			<p>{jobTitle}</p>
			<p className={styles.jobPeriod}>
				{start} – {end}
			</p>
			{children}
		</div>
	);
}
