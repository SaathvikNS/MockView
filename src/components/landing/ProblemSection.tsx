import { Frown, HelpCircle, Video } from "lucide-react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";

const problems = [
	{
		icon: Frown,
		image: "/norealpractice.png",
		title: "Reading Tips Isn't Enough",
		desc: "You wouldn't run a marathon by reading about running. Interview practice needs to be realistic, not theoretical.",
	},
	{
		icon: HelpCircle,
		image: "/genericprep.png",
		title: "One-Size-Fits-All Questions",
		desc: "Generic interview questions don't prepare you for role-specific technical and behavioral challenges.",
	},
	{
		icon: Video,
		image: "/awkwardSelfRecording.png",
		title: "Recording Yourself Falls Flat",
		desc: "Watching yourself is awkward and doesn't tell you what you're missing from the job requirements.",
	},
];

const ProblemSection = () => (
	<section className="py-20 px-4 bg-background">
		<div className="container mx-auto text-center">
			<FadeContent duration={2}>
				<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
					Why Most People Fail Interviews
				</h2>
				<p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
					{
						"The traditional approach to interview prep is broken. Here's why."
					}
				</p>
			</FadeContent>
			<div className="grid md:grid-cols-3 gap-8">
				{problems.map((p, i) => (
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
						<SpotlightCard
							spotlightColor="rgba(100, 100, 255, 0.3)"
							className="rounded-xl overflow-clip h-full"
						>
							<div className="bg-card rounded-xl p-8 shadow-sm border text-left">
								<div className="w-full flex items-center gap-5 md:block lg:flex">
									<div className="relative h-12 w-12 flex items-center justify-center mb-4">
										<Image
											src={p.image}
											alt={p.title}
											fill
										/>
									</div>
									<h3 className="text-lg font-semibold mb-2 text-primary">
										{p.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									{p.desc}
								</p>
							</div>
						</SpotlightCard>
					</AnimatedContent>
				))}
			</div>
		</div>
	</section>
);

export default ProblemSection;
