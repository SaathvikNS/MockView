import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientBackground from "../GradientBackground";
import AnimatedContent from "../AnimatedContent";

const CTASection = () => (
	<section className="py-20 px-4">
		<AnimatedContent
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
			<GradientBackground
				colors={["hsl(231, 67%, 30%)", "hsl(231, 67%, 60%)"]}
				className="rounded-2xl overflow-clip sm:w-[90%]"
			>
				<div>
					<div className="rounded-2xl p-8 sm:p-16 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
							Ready to Stop Guessing?
						</h2>
						<p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
							Start practicing with AI feedback today—completely
							free
						</p>
						<Button size="lg" variant="secondary" asChild>
							<Link href="/signup">
								Start Your First Mock Interview{" "}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<p className="text-primary-foreground/60 text-sm mt-4">
							Free Practice Session • Personal Performance
							Analysis • 500+ Interview Practice minutes
						</p>
					</div>
				</div>
			</GradientBackground>
		</AnimatedContent>
	</section>
);

export default CTASection;
