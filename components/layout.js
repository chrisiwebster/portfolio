import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
	faBriefcase,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const name = "Chrisi Webster";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<nav className={styles.navBar}>
				<Link href="/">Home</Link>
				<Link href="/courses">Courses</Link>
				<Link href="https://www.linkedin.com/in/christinawebster/">
					LinkedIn
				</Link>
				<Link href="https://github.com/chrisiwebster">GitHub</Link>
			</nav>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Chrisi Webster's portfolio site built using Nextjs."
				/>
				<title>
					{home ? "Chrisi Webster" : "Courses | Chrisi Webster"}
				</title>
				<meta
					name="og:title"
					content={
						home ? "Chrisi Webster" : "Courses | Chrisi Webster"
					}
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<Image
					priority
					src="/images/profile.jpg"
					height={144}
					width={144}
					alt={name}
					className={styles.profileImage}
				/>
				<h1>{name}</h1>
				<p className={styles.current}>
					<FontAwesomeIcon icon={faBriefcase} /> Technical & UX Writer
				</p>
				<p className={styles.current}>
					<FontAwesomeIcon icon={faGraduationCap} /> UX Writing for
					Technical Writers
				</p>
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
