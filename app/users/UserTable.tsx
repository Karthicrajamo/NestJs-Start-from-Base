import Link from "next/link";
import React, { Suspense } from "react";
import { sort } from "fast-sort";

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await res.json();

	const sortedUsers = sort(users).asc(
		sortOrder === "email" ? (users) => users.email : (users) => users.name
	);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<h1>User</h1>
							<Link href={'/users/new'}><button className="btn btn-primary">Create New User</button></Link>
				<div>
					<table className="table">
						<thead>
							<tr>
								<td>
									<Link href={"/users?sortOrder=name"}>Name</Link>
								</td>
								<td>
									<Link href={"/users?sortOrder=email"}>Email</Link>
								</td>
							</tr>
						</thead>
						{sortedUsers.map((user) => (
							<>
								<tbody>
									<tr>
										<td>{user.name}</td>
										<td>{user.email}</td>
									</tr>
								</tbody>
							</>
						))}
					</table>
				</div>
			</Suspense>
		</>
	);
};

export default UserTable;
