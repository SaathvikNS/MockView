import CustomCardSwap from "@/components/CustomCardSwap";
import NavBar from "@/components/navbar";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
	return (
		<div className="w-screen overflow-x-hidden">
			<NavBar />

			{/* Hero section */}
			<div
				className={
					"block sm:flex h-dvh w-screen bg-[radial-gradient(circle_250px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] from-primary sm:bg-[radial-gradient(circle_700px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] sm:from-primary"
				}
			>
				<div className="z-50 h-max w-full sm:h-full sm:w-4/10 flex flex-col pt-40 sm:justify-around sm:items-center">
					<div className="flex flex-col">
						<SplitText
							text="Nail Your Next Interview "
							className="text-primary-foreground text-2xl font-bold sm:text-4xl"
							delay={50}
							duration={1.25}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
							textAlign="center"
						/>
						<SplitText
							text="With AI Powered Practice!"
							className="text-primary-foreground text-2xl font-bold [&_span:nth-of-type(2)]:text-primary [&_span:nth-of-type(2)]:text-3xl [&_span:nth-of-type(2)]:font-extrabold sm:text-4xl sm:[&_span:nth-of-type(2)]:text-5xl sm:pt-5"
							delay={50}
							duration={1.25}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
							textAlign="center"
						/>
					</div>
					<div className="hidden sm:flex justify-center text-center text-primary-foreground">
						<h2 className="w-1/2 text-2xl">
							Get personalized feedback on your interview answers.
							Practice like a pro, interview like a champion
						</h2>
					</div>
					<div className="hidden sm:flex">
						<Link href={"/login"} className="z-50">
							<Button className="cursor-pointer font-semibold tracking-wider text-md">
								Get Started <ArrowRight />
							</Button>
						</Link>
					</div>
					<div className="hidden sm:flex justify-evenly text-primary-foreground w-full font-bold py-5">
						<div className="tracking-wider">
							<span className="text-primary text-2xl">✓</span>{" "}
							Free practice sessions
						</div>
						<div className="tracking-wider">
							<span className="text-primary text-2xl">✓</span>{" "}
							Personal performance analysis
						</div>
					</div>
				</div>
				<CustomCardSwap />
				{/* <div>
					<div className="block sm:hidden text-center text-primary-foreground bg-red-500">
						Get personalized feedback on your interview answers.
						Practice like a pro, interview like a champion
					</div>
					<div className="block sm:hidden ">
						<Link href={"/login"} className="z-50">
							<Button className="cursor-pointer">
								Get Started <ArrowRight />
							</Button>
						</Link>
					</div>
				</div> */}
			</div>

			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
		</div>
	);
};

export default Home;
