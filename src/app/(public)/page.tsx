import AnimatedContent from "@/components/AnimatedContent";
import CustomCardSwap from "@/components/CustomCardSwap";
import FadeContent from "@/components/FadeContent";
import HowItWorksStepper from "@/components/HowItWorksStepper";
import HeroSection from "@/components/landing/HeroSection";
import NavBar from "@/components/navbar";
import SplitText from "@/components/SplitText";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	const problemData = [
		{
			title: "No Real Practice",
			header: "Reading tips isn't enough",
			description:
				"You wouldn't run a marathon by reading about running. Interview practice needs to be realistic, not theoretical.",
			image: "/norealpractice.png",
		},
		{
			title: "Generic Prep",
			header: "One-Size-Fits-All Questions",
			description:
				"Generic interview questions don't prepare you for role-specific technical and behavioral challenges.",
			image: "/genericprep.png",
		},
		{
			title: "Awkward Self-Recording",
			header: "Recording Yourself Falls Flat",
			description:
				"Watching yourself is awkward and doesn't tell you what you're missing from the job requirements.",
			image: "/awkwardSelfRecording.png",
		},
	];

	const features = [
		{
			icon: "🎯",
			title: "Role-Specific Questions",
			description:
				"Not generic—questions tailored to the exact job you're applying for.",
		},
		{
			icon: "🎤",
			title: "Audio or Text Answers",
			description:
				"Practice speaking out loud or type your responses. Your choice.",
		},
		{
			icon: "🤖",
			title: "Instant AI Feedback",
			description:
				"Know what you nailed, what you missed, and how to improve—right away.",
		},
		{
			icon: "📊",
			title: "Track Your Progress",
			description:
				"See your scores improve across sessions. Visualize your growth.",
		},
		{
			icon: "📧",
			title: "Email Summaries",
			description:
				"Get detailed performance reports sent to your inbox after each session.",
		},
		{
			icon: "🔒",
			title: "Private & Secure",
			description:
				"Your practice sessions are private. We don't share your data.",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<NavBar />
			<HeroSection />

			{/* Hero section */}
			<div
				className="block h-auto w-screen bg-[radial-gradient(circle_350px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))] from-primary  
									sm:bg-[radial-gradient(circle_700px_at_50%_40%,var(--color-blue-950),var(--color-gray-900))]
									md:flex md:items-center md:h-dvh md:bg-[radial-gradient(circle_700px_at_50%_15%,var(--color-blue-950),var(--color-gray-900))]"
			>
				<div
					className="h-max w-full  flex flex-col pt-[15vh] mb-[3vh] 
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
					className="h-[calc((100vw * 11)/16)] w-screen flex flex-col justify-end overflow-y-hidden mt-[5vh]
										sm:h-[calc((100vw * 15)/16)]
										md:h-[80vh] md:w-[60vw]"
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
			<div className="h-max w-screen flex flex-col items-center space-y-2">
				<FadeContent
					duration={1}
					className="relative text-primary-foreground text-center text-2xl pt-5 w-[80%] wrap-normal font-bold
									sm:text-3xl
									md:w-[90%] md:text-left"
				>
					Why Most People Fail Interviews?
				</FadeContent>
				<div
					className="mt-[5vh] flex flex-col gap-3 items-center
										md:flex-row md:justify-evenly md:w-[95%] md:items-stretch"
				>
					{problemData.map((problem, i) => (
						<AnimatedContent
							key={i}
							distance={100}
							direction="vertical"
							reverse={false}
							duration={0.8}
							ease="power3.out"
							initialOpacity={0}
							animateOpacity
							scale={1}
							threshold={0.1}
							delay={0}
						>
							<div className="bg-gray-900 h-full">
								<SpotlightCard
									className="backdrop-blur-3xl border-none! bg-transparent! backdrop-brightness-120 rounded-xl w-[80vw] p-5!
													md:w-[calc(90vw/3)] md:h-full"
									spotlightColor="rgba(0, 229, 255, 0.2)"
								>
									<div>
										<div className="relative flex items-center w-full">
											<div className="absolute aspect-square rounded-full w-[10vw] flex justify-center items-center">
												<div
													className="absolute w-[80%] aspect-square left-0
																	sm:w-[50%]
																	md:w-[30%]"
												>
													<Image
														src={problem.image}
														alt="no real practice"
														fill
													/>
												</div>
											</div>
											<div className="w-full flex justify-center">
												<h1
													className="text-lg font-black text-primary tracking-wide
																	md:text-xl"
												>
													{problem.title}
												</h1>
											</div>
										</div>
										<div
											className="my-3 w-full h-0.5 bg-linear-to-r from-primary/0 via-primary to-primary/0
															md:mt-5"
										/>
										<div className="px-3">
											<h1
												className="text-primary pb-1
																md:text-lg"
											>
												{problem.header}
											</h1>
											<div
												className="text-muted-foreground text-justify text-sm
																md:text-base"
											>
												{problem.description}
											</div>
										</div>
									</div>
								</SpotlightCard>
							</div>
						</AnimatedContent>
					))}
				</div>
			</div>

			{/* How it works section */}
			<div>
				<HowItWorksStepper />
			</div>

			{/* Feaures grids */}
			<div
				className="bg-[radial-gradient(circle_600px_at_100%_50%,var(--color-blue-950),var(--color-gray-900))] from-primary
									sm:bg-[linear-gradient(var(--color-gray-900),var(--color-blue-950),var(--color-gray-900))]"
			>
				<section className="relative py-10">
					<div className="mx-auto px-6">
						{/* Heading */}
						<h2 className="text-center text-primary-foreground text-2xl sm:text-3xl font-bold tracking-tight">
							Everything You Need to <br className="sm:hidden" />
							<span className="text-primary">Ace</span> Interviews
						</h2>

						{/* Grid */}
						<div
							className="mt-14 grid gap-6 justify-center items-stretch
												sm:grid-cols-2 
												lg:grid-cols-3 "
						>
							{features.map((feature, i) => (
								<AnimatedContent
									key={i}
									distance={100}
									direction="vertical"
									reverse={false}
									duration={0.8}
									ease="power3.out"
									initialOpacity={0}
									animateOpacity
									scale={1}
									threshold={0.1}
									delay={0}
									className="flex justify-center rounded-xl overflow-clip
														md:rounded-2xl"
								>
									<div
										className="bg-gray-900 h-full flex rounded-lg w-full 
															md:w-[90%]"
									>
										<SpotlightCard
											className="backdrop-blur-3xl border-none! bg-transparent! backdrop-brightness-120 rounded-lg w-[80vw] p-5!
													md:w-full md:h-full"
											spotlightColor="rgba(0, 229, 255, 0.2)"
										>
											<div className="flex gap-5 items-center">
												<div className="text-2xl">
													{feature.icon}
												</div>

												<h3 className="text-lg font-semibold text-primary">
													{feature.title}
												</h3>
											</div>

											<p className="mt-4 text-sm text-muted-foreground leading-relaxed">
												{feature.description}
											</p>
										</SpotlightCard>
									</div>
								</AnimatedContent>
							))}
						</div>
					</div>
				</section>
			</div>

			<div className="h-screen w-screen">
				<section className="relative overflow-hidden py-24">
					{/* Gradient background */}
					<div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600" />

					{/* Subtle noise / overlay for depth */}
					<div className="absolute inset-0 bg-black/20" />

					<div className="relative mx-auto max-w-4xl px-6 text-center">
						{/* Heading */}
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
							Ready to Stop Guessing?
						</h2>

						{/* Subheading */}
						<p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
							Start practicing with AI feedback today—
							<span className="font-semibold text-white">
								{" "}
								completely free
							</span>
						</p>

						{/* CTA */}
						<div className="mt-10">
							<a
								href="/start"
								className="
              inline-flex items-center justify-center
              rounded-xl bg-white px-8 py-4
              text-lg font-semibold text-black
              shadow-xl shadow-black/30
              transition
              hover:-translate-y-1 hover:shadow-2xl
              focus:outline-none focus:ring-4 focus:ring-white/40
            "
							>
								Start Your First Mock Interview
								<span className="ml-2 transition-transform group-hover:translate-x-1">
									→
								</span>
							</a>
						</div>
					</div>
				</section>
			</div>
			<div className="h-screen w-screen"></div>
			<div className="h-screen w-screen"></div>
			<div className="h-screen w-screen"></div>
		</div>
	);
};

export default Home;
