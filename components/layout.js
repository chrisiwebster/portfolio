import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
	faBriefcase,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const name = "Chrisi Webster";

export default function Layout({ children, home, courses, experience }) {
	const [currentPage, setCurrentPage] = useState("");

	const checkPage = () => {
		window.location.href.includes("course")
			? setCurrentPage("courses")
			: window.location.href.includes("experience")
			? setCurrentPage("experience")
			: setCurrentPage("home");
	};

	useEffect(() => {
		checkPage();
	}, []);

	return (
		<div className={styles.container}>
			{/* <nav className={styles.navBar}>
				<Link href="/" passHref>
					<a
						className={
							currentPage == "home" ? styles.currentPage : ""
						}
					>
						Home
					</a>
				</Link>
				<Link href="/experience">
					<a
						className={
							currentPage == "experience"
								? styles.currentPage
								: ""
						}
					>
						Experience
					</a>
				</Link>
				<Link href="/courses">
					<a
						className={
							currentPage == "courses" ? styles.currentPage : ""
						}
					>
						Courses
					</a>
				</Link>
				<Link href="https://github.com/chrisiwebster">GitHub</Link>
			</nav> */}
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Chrisi Webster's portfolio site built using Nextjs."
				/>
				<title>
					{courses
						? "Courses | Chrisi Webster"
						: experience
						? "Professional experience | Chrisi Webster"
						: "Chrisi Webster"}
				</title>
				<meta
					name="og:title"
					content={
						courses
							? "Courses | Chrisi Webster"
							: experience
							? "Professional experience | Chrisi Webster"
							: "Chrisi Webster"
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
					<FontAwesomeIcon icon={faBriefcase} />
					&nbsp;Senior Technical & UX Writer
				</p>
				<p className={styles.current}>
					<FontAwesomeIcon icon={faGraduationCap} />
					&nbsp;UX Writing Fundamentals
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
