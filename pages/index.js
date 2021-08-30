//Components
import Layout from "../components/layout";
import Card from "../components/Card";
import Link from "next/link";
import Button from "../components/Button";

//CSS
import cardStyles from "../styles/Card.module.css";
import buttonStyles from "../styles/Button.module.css";

//Images
import checkout from "../public/images/checkout.svg";
import scie from "../public/images/scie.svg";

export default function Home() {
	return (
		<Layout home>
			<h2>Professional experience</h2>
			<p>
				Content person first and foremost, with five years of experience
				making the complex simple. Also interested in front-end
				development.
			</p>
			<p>
				Constantly striving on improvement and learning the latest best
				practice.
			</p>
			<p>
				Read more about{" "}
				<Link href="/courses">courses I&apos;ve completed</Link>
			</p>
			<hr />
			<Card
				title="Checkout.com"
				logo={checkout}
				alt="Logo for Checkout.com"
			>
				<p className={cardStyles.jobTitle}>Technical & UX Writer</p>
				<p className={cardStyles.jobPeriod}>January 2021 – Present</p>
				<ul>
					<li>
						Implemented a company-wide governance and publication
						process for the API reference.
					</li>
					<li>
						Create UX copy guiding principles for merchant facing
						interfaces across the business, including micro-copy,
						error states and inline dialogue.
					</li>
					<li>
						Review UX copy in Figma, working closely with Product
						Designers.
					</li>
					<li>
						Document REST APIs with clear, human-centered copy,
						working with engineers, product leads, and the Customer
						Success team.
					</li>
					<li>
						Create and update OpenAPI definitions (in YAML) using
						GitHub and VS Code.
					</li>
					<li>
						Use Heap.io and Google Analytics to measure impact and
						inform content decisions.
					</li>
					<li>
						Create POCs and write proposals for new technology to be
						used within the team.
					</li>
				</ul>
				<p>
					Technical skills: HTML, CSS, Markdown, YAML, Postman,
					Confluence, Figma
				</p>
			</Card>
			<Card
				title="Social Care Institute for Excellence (SCIE)"
				alt="Logo for SCIE"
				logo={scie}
			>
				<p className={cardStyles.jobTitle}>Digital Content Developer</p>
				<p className={cardStyles.jobPeriod}>
					January 2020 – January 2021
				</p>
				<ul>
					<li>
						Copy-edited and designed reports, bringing them to life
						with CSS3, including charts using Chart.js.
					</li>
					<li>
						Support implementation of user feedback on the site to
						inform on layout and content changes.
					</li>
					<li>
						Increased CTR from 0.8% to 3.3% for the keyword
						safeguarding in two months, using tools such as Moz,
						Hotjar and Google Analytics.
					</li>
					<li>
						Designed accessible e-learning modules in Adapt for
						stakeholders such as the Department of Health and Social
						Care.
					</li>
					<li>
						Monitored and fixed on-site issues such as keyboard
						accessibility, inconsistent mobile sizing and
						font/colour combinations keeping in mind WCAG standards.
					</li>
					<li>
						Proofread and copy-edited material across the business
						ready to be put onto the website.
					</li>
				</ul>

				<p>
					Technical skills: HTML, CSS, JavaScript, Moz, Google
					Analytics, SVN version control
				</p>
			</Card>
			<Button
				name="View more experience"
				className={buttonStyles.fullBtn}
				link="https://www.linkedin.com/in/christinawebster/"
			/>
		</Layout>
	);
}
