// 'use client'
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
// import _ from "lodash";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<>
			<h1 className="btn btn-primary">hai {session && session.user!.name}</h1>
			{/* <button
				onClick={async() => {
					const _ = (await import('lodash')).default
					const users = [{ name: "g" }, { name: "b" }, { name: "a" }];
					const sortedUser = _.orderBy(users, ['name']);
					console.log(sortedUser);
					
				}
			}
			>
				click
			</button> */}
		</>
	);
}
