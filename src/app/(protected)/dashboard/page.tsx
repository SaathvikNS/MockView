"use client"

import SignOutButton from "@/components/signoutbutton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
	const { data: session} = useSession();
	console.log(session?.user)
	return (
		<div>
			<nav>this is the nav bar</nav>
			<main>this is the main dashboard content</main>
			<footer>this is the footer</footer>
			<SignOutButton />
			<p>{session?.user?.name}</p>
			<p>{session?.user?.email}</p>
			<div className="relative w-10 h-10">
				<Image src={session?.user?.image || "/next.svg"} alt="user avatar" width={100} height={100} />
			</div>
		</div>
	);
};

export default Dashboard;
