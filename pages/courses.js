import Layout from "../components/layout";
import Card from "../components/Card";
import styles from "../styles/Card.module.css";

import codecademy from "../public/images/codecademy.svg";
import birkbeck from "../public/images/birkbeck.svg";
import linkedin from "../public/images/linkedin.svg";
import uxwriters from "../public/images/uxwriters.svg";
import ptc from "../public/images/ptc.svg";

export default function Courses() {
	return (
		<Layout courses>
			<h2>Professional qualifications</h2>
			<Card
				title="UX Writers Collective"
				logo={uxwriters}
				alt="Logo for UX Writers Collective"
			>
				<p className={styles.jobTitle}>
					UX Writing for Technical Writers{" "}
				</p>
				<p className={styles.jobPeriod}>August 2021 – Present</p>
			</Card>
			<Card
				title="Birkbeck, University of London"
				logo={birkbeck}
				alt="Logo for Birkbeck"
			>
				{" "}
				<p className={styles.jobTitle}>
					PG Certification in Web Design & Development
				</p>
				<p className={styles.jobPeriod}>
					October 2020 – September 2021
				</p>
			</Card>
			<Card
				title="The Publishing Training Centre"
				logo={ptc}
				alt="Logo for the Publishing Training Centre"
			>
				{" "}
				<p className={styles.jobTitle}>Essential Copy-Editing</p>
				<p className={styles.jobPeriod}>June 2018 – July 2019</p>
			</Card>
			<Card
				title="The Publishing Training Centre"
				logo={ptc}
				alt="Logo for the Publishing Training Centre"
			>
				{" "}
				<p className={styles.jobTitle}>Basic Proofreading</p>
				<p className={styles.jobPeriod}>July 2017 – March 2018</p>
			</Card>
			<h2>Online learning</h2>
			<Card title="Codecademy" logo={codecademy} alt="Codecademy logo">
				<p>
					<strong>Ongoing:</strong> Career Path: Front-End Engineer
				</p>

				<p>
					<strong>Completed:</strong> Learn React.js, Learn Git, Learn
					the Command Line, Building Interactive JavaScript Websites,
					Learn JavaScript
				</p>
			</Card>
			<Card
				title="LinkedIn Learning"
				logo={linkedin}
				alt="LinkedIn Learning logo"
			>
				<p>
					<strong>Completed:</strong> Learning Web Analytics, Learning
					Google Tag Manager
				</p>
			</Card>
		</Layout>
	);
}
