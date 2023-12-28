import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<>
			<h1 className="btn btn-primary">hai {session && session.user!.name}</h1>

		</>
	);
}
