import NavBar from "@/components/navbar";

const Home = () => {
	return (
		<div className="w-screen overflow-x-hidden">
			<NavBar />
			<div
				className={
					"h-dvh w-screen bg-[radial-gradient(circle_700px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] from-primary"
				}
			></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
		</div>
	);
};

export default Home;
