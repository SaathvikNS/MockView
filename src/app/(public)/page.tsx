import Link from "next/link";

const Home = () => {
	return (
		<main>
			<h1>MockView</h1>
			<Link href={"/login"}>Login</Link>
		</main>
	);
};

export default Home;
