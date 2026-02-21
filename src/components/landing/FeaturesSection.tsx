import { Target, Mic, Bot, BarChart3, Mail, Shield } from "lucide-react";
import FadeContent from "../FadeContent";
import AnimatedContent from "../AnimatedContent";
import SpotlightCard from "../SpotlightCard";

const features = [
	{
		icon: Target,
		title: "Role-Specific Questions",
		desc: "Not generic—questions tailored to the exact job you're applying for.",
	},
	{
		icon: Mic,
		title: "Audio or Text Answers",
		desc: "Practice speaking out loud or type your responses. Your choice.",
	},
	{
		icon: Bot,
		title: "Instant AI Feedback",
		desc: "Know what you nailed, what you missed, and how to improve—right away.",
	},
	{
		icon: BarChart3,
		title: "Track Your Progress",
		desc: "See your scores improve across sessions. Visualize your growth.",
	},
	{
		icon: Mail,
		title: "Email Summaries",
		desc: "Get detailed performance reports sent to your inbox after each session.",
	},
	{
		icon: Shield,
		title: "Private & Secure",
		desc: "Your practice sessions are private. We don't share your data.",
	},
];

const FeaturesSection = () => (
	<section id="features" className="py-20 px-4 bg-background">
		<div className="container mx-auto">
			<FadeContent duration={2} className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					Everything You Need to Ace Interviews
				</h2>
			</FadeContent>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((f, i) => (
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
							<div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
								<div className="flex gap-5 items-center mb-4">
									<div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
										<f.icon className="h-5 w-5 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground mb-1">
										{f.title}
									</h3>
								</div>
								<p className="text-sm text-muted-foreground">
									{f.desc}
								</p>
							</div>
						</SpotlightCard>
					</AnimatedContent>
				))}
			</div>
		</div>
	</section>
);

export default FeaturesSection;
