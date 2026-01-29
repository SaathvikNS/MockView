import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions);

	if (!session) redirect("/login");
	return <>{children}</>;
};

export default ProtectedLayout;
