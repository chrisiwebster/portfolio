import Link from "next/link";

export default function Button({ name, className, link }) {
	return (
		<Link href={link}>
			<button className={className}>{name}</button>
		</Link>
	);
}
