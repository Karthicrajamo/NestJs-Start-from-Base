"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
	const { status, data: session } = useSession();

	// if (status === 'loading') return;

	return (
		<div className="flex bg-slate-200 space-x-3 justify-between items-center p-4">
			<div>
				<Link href={"/"} className="mr-5">
					NextJs
				</Link>
				<Link href={"/users"}>User</Link>
			</div>
			<div >
				{status === "loading" && (
					<button className="btn">
						<span className="loading loading-spinner"></span>
						loading
					</button>
				)}
				{status === "authenticated" && (
					<div className="btn btn-info">{session.user!.name}</div>
				)}
				{status === "unauthenticated" && (
					<Link className="btn btn-primary " href={"/api/auth/signin"}>
						LOGIN
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
