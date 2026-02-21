import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProblemSection from "@/components/landing/ProblemSection";
import NavBar from "@/components/navbar";

const Home = () => {
	return (
		<div className="min-h-screen bg-background">
			<NavBar />
			<HeroSection />
			<ProblemSection />
			<HowItWorksSection />
			<FeaturesSection />
			<CTASection />
			<FooterSection />
		</div>
	);
};

export default Home;
