import Layout from "../components/layout";
import Card from "../components/Card";

import checkout from "../public/images/checkout.svg";

export default function Home() {
	return (
		<Layout home>
			<p>Technical & UX Writer who loves to learn about coding.</p>
			<Card
				title="Checkout.com"
				logo={checkout}
				start="January 2021"
				end="Present"
				alt="Logo for Checkout.com"
				jobTitle="Technical & UX Writer"
			>
				<ul>
					<li>Responsibility</li>
				</ul>
			</Card>
			<Card
				title="Social Care Institute for Excellence (SCIE)"
				start="January 2020"
				alt="Logo for Checkout.com"
				end="January 2021"
				logo={checkout}
				jobTitle="Digital Content Developer"
			>
				<ul>
					<li>fdkj</li>
				</ul>
			</Card>
		</Layout>
	);
}
