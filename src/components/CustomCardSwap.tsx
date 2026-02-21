"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

const CustomCardSwap = () => {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	return (
		<div
			className="	right-0 aspect-video w-[calc(100vw-2rem)] z-1 mt-[7vh]
								sm:mt-[10vh]
								md:w-[80vw]
								lg:w-[50vw]"
		>
			<div className="w-full h-full flex items-center justify-center">
				<CardSwap
					height={"100%"}
					width={"100%"}
					cardDistance={isMobile ? 20 : isTablet ? 50 : 60}
					verticalDistance={isMobile ? 20 : isTablet ? 50 : 60}
					delay={5000}
					pauseOnHover={false}
					skewAmount={4}
				>
					<Card className="border-0 shadow-2xl">
						<Image
							src={"/web1.png"}
							alt="preview1"
							fill
							className="rounded-2xl"
						/>
					</Card>
					<Card className="border-0 shadow-2xl">
						<Image
							src={"/web2.png"}
							alt="preview2"
							fill
							className="rounded-2xl"
						/>
					</Card>
					<Card className="border-0 shadow-2xl">
						<Image
							src={"/web3.png"}
							alt="preview3"
							fill
							className="rounded-2xl"
						/>
					</Card>
				</CardSwap>
			</div>
		</div>
	);
};

export default CustomCardSwap;
