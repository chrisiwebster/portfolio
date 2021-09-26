//Components
import Layout from "../components/layout";
import Card from "../components/Card";

//CSS
import styles from "../styles/Card.module.css";

//Images
import metroman from "../public/images/metroman.svg";
import safeguarding from "../public/images/sciesafeguarding.svg";
import docs from "../public/images/checkoutdocs.svg";
import dashboard from "../public/images/dashboard.svg";

export default function Home() {
	return (
		<Layout home>
			<h2>What I do</h2>
			<p>
				No matter what my job title is specifically, content has always
				been the centre of it. Each industry I work in and each new task
				I find myself completing is something I bring forward to every
				role I have. The one common theme has always been the people
				reading the content being created; understanding their needs and
				trying to fulfil them as much as possible.
			</p>
			<Card
				title="UX Writer"
				logo={dashboard}
				alt="Checkout.com's dashboard."
				className={styles.caseStudies}
			>
				<p>
					There are two key initiatives I am involved in as a UX
					writer at Checkout.com: design alignment across the
					dashboard and the creation of our design system. One key
					role I play is researching and defining our guidelines,
					having created concepts for one product for CTAs, modals and
					microcopy.{" "}
				</p>
				<p>
					Day to day, I work with all product teams across Checkout to
					create a consistent user experience on our dashboard.
				</p>
			</Card>
			<Card
				title="Technical Writer"
				logo={docs}
				alt="Checkout.com documentation site."
				className={styles.caseStudies}
			>
				<p>
					At Checkout.com, we are working hard to create a human
					approach towards technical documentation. The integration
					builder has been the key project so far; instead of a
					high-level approach to technical documentation, the
					integration builder aims to guide and teach those who may be
					new to coding and APIs.
				</p>
				<p>
					Additionally, I&apos;m working on creating baselines for our
					analytics on how we can measure success as well as creating
					POCs for A/B testing and better feedback tools so we can
					understands the needs of the user. I always look out for
					ways to improve.{" "}
				</p>
				<p>
					My course at the UX Writers Collective has also taught me
					the power of bringing UX principles into technical
					documentation.{" "}
				</p>
			</Card>
			<Card
				title="Copywriter"
				logo={safeguarding}
				className={styles.caseStudies}
				alt="Social Care Institute of Excellence safeguarding section of their website."
			>
				<p>
					While working on the website at the social care charity, I
					focused on improving our search rankings for the keyword
					&apos;safeguarding&apos;. This section on the website saw a
					lot of visitors, but had a high bounce rate of 68%.{" "}
				</p>
				<p>
					Through research and creating a few additional information
					pages, I increased CTR from 0.8% to 3.3% and bounce rate
					down to 60% in just two months.
				</p>
			</Card>
			<Card
				title="Content Writer and Editor"
				logo={metroman}
				alt="Logo of MetroMan"
				className={styles.caseStudies}
			>
				<p>
					In my first 6 months at Metro Bank, I led focus groups with
					teams across London to re-shape the internal content system.
					These colleagues were customer-facing and used the internal
					content when they needed to find out more about banking
					procedures, which was vital for providing excellent customer
					service. By leading these focus groups, we understood what
					information wasn&apos;t helpful, and what they wished we had
					more of. It also addressed a large disparity in structure;
					for which, we created a template.{" "}
				</p>
			</Card>
		</Layout>
	);
}
