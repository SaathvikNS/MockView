import CardSwap, { Card } from "@/components/CardSwap";
import NavBar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
	return (
		<div className="w-screen overflow-x-hidden">
			<NavBar />
			<div
				className={
					"h-dvh w-screen bg-[radial-gradient(circle_700px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] from-primary"
				}
			>
				<div className="relative top-[80%] right-[0%] bg-red-400">
					<CardSwap
						height={1080 / 2.5}
						width={1920 / 2.5}
						cardDistance={60}
						verticalDistance={70}
						delay={5000}
						pauseOnHover={false}
					>
						<Card className="border-0">
							<Image src={"/web1.png"} alt="preview1" fill />
						</Card>
						<Card className="border-0">
							<Image src={"/web2.png"} alt="preview2" fill />
						</Card>
						<Card className="border-0">
							<Image src={"/web3.png"} alt="preview3" fill />
						</Card>
					</CardSwap>
				</div>
			</div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
		</div>
	);
};

export default Home;
