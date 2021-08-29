import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Chrisi Webster";
const siteTitle = "Chrisi Webster Portfolio";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<nav className={styles.navBar}>
				<Link href="/">Home</Link>
				<Link href="/courses">Courses</Link>
			</nav>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Chrisi Webster's portfolio site built using Nextjs."
				/>
				<title>{siteTitle}</title>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home && (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							height={144}
							width={144}
							alt={name}
							className={styles.profileImage}
						/>
						<h1>{name}</h1>
					</>
				)}
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
