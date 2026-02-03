import CustomCardSwap from "@/components/CustomCardSwap";
import FadeContent from "@/components/FadeContent";
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
				className="block h-dvh w-screen bg-[radial-gradient(circle_250px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] from-primary  
									sm:h-auto sm:bg-[radial-gradient(circle_700px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] sm:from-primary
									md:flex md:items-center md:h-dvh md:bg-[radial-gradient(circle_700px_at_50%_20%,var(--color-blue-950),var(--color-gray-900))] md:from-primary"
			>
				<div
					className="z-50 h-max w-full  flex flex-col pt-[15vh] mb-[3vh] 
										md:h-full md:w-4/10 md:justify-around md:items-center md:mb-0"
				>
					<div className="flex flex-col">
						<SplitText
							text="Nail Your Next Interview "
							className="text-primary-foreground text-2xl font-bold 
												sm:text-3xl 
												md:text-4xl"
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
							className="text-primary-foreground text-2xl font-bold [&_span:nth-of-type(2)]:text-primary [&_span:nth-of-type(2)]:text-3xl [&_span:nth-of-type(2)]:font-extrabold
												sm:text-3xl sm:[&_span:nth-of-type(2)]:text-4xl sm:pt-3
												md:text-4xl md:[&_span:nth-of-type(2)]:text-5xl md:pt-5"
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
					<div
						className="hidden justify-center text-center text-primary-foreground
											md:flex "
					>
						<h2 className="w-4/5 text-2xl">
							Get personalized feedback on your interview answers.
							Practice like a pro, interview like a champion
						</h2>
					</div>
					<div
						className="hidden 
										md:flex"
					>
						<Link href={"/login"} className="z-50">
							<Button className="cursor-pointer font-semibold tracking-wider text-md">
								Get Started <ArrowRight />
							</Button>
						</Link>
					</div>
					<div
						className="hidden justify-evenly text-primary-foreground w-full font-bold py-5 
										md:flex"
					>
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
				<div
					className="h-[30vh] flex flex-col justify-end overflow-y-hidden mt-[5vh]
										sm:h-[60vh]
										md:h-[80vh]"
				>
					<CustomCardSwap />
				</div>
				<div
					className="mt-[3vh] flex flex-col justify-around items-center w-full h-[40vh] 
										md:hidden"
				>
					<div className="text-center text-primary-foreground w-[80vw] sm:text-xl">
						Get personalized feedback on your interview answers.
						Practice like a pro, interview like a champion
					</div>
					<div>
						<Link href={"/login"} className="z-50">
							<Button className="cursor-pointer">
								Get Started <ArrowRight />
							</Button>
						</Link>
					</div>
					<div
						className=" flex flex-col items-center text-primary-foreground w-full font-bold pb-20 
											sm:pb-0 sm:flex-row sm:justify-around"
					>
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
			</div>

			{/* Problem Section */}
			<div className="h-screen w-screen bg-gray-900">
				<FadeContent
					duration={2}
					delay={0.5}
					className="text-primary-foreground font-bold text-xl text-center"
				>
					Why Most People Fail Interviews?
				</FadeContent>
			</div>
			<div className="h-screen w-screen bg-neutral-900"></div>
			<div className="h-screen w-screen bg-neutral-900"></div>
		</div>
	);
};

export default Home;
