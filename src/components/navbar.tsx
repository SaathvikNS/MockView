"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import GlassSurface from "@/components/GlassSurface";
import { Button } from "@/components/ui/button";
import GradientText from "./GradientText";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

export default function Header() {
	const { scrollY } = useScroll();

	const isMobile = useIsMobile();

	const effectiveScrollY = useTransform(scrollY, (v) => (isMobile ? 0 : v));

	const glassOpacity = useTransform(scrollY, [0, 100], [0, 1]);
	const glassWidth = useTransform(
		effectiveScrollY,
		[0, 100],
		["100%", "60%"],
	);

	return (
		<header className="fixed top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 bg-blue900 flex justify-center">
			<motion.div
				style={{ width: glassWidth }}
				className="relative h-14 rounded-2xl flex items-center justify-between"
			>
				<motion.div
					style={{ opacity: glassOpacity }}
					className="absolute h-full w-full"
				>
					<GlassSurface
						width="100%"
						height="100%"
						borderRadius={50}
						backgroundOpacity={0.25}
						blur={11}
						displace={0.5}
						distortionScale={-180}
						redOffset={0}
						greenOffset={10}
						blueOffset={20}
						brightness={50}
						opacity={0.93}
						borderWidth={0.07}
					/>
				</motion.div>

				<div className="mx-5">
					<GradientText
						colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
						animationSpeed={8}
						showBorder={false}
						className="rounded-none"
					>
						<h1 className="text-2xl font-black tracking-normal px-3">
							MockView
						</h1>
					</GradientText>
				</div>
				<Link href={"/login"} className="z-0 mx-5">
					<Button variant={"default"} size={"sm"}>
						Login
					</Button>
				</Link>
			</motion.div>
		</header>
	);
}
