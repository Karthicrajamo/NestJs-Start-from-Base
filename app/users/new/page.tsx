'use client'
import { useRouter } from "next/navigation";
import React from "react";

const New = () => {
	const router = useRouter();
	return (
		<>
			<button
				className="btn"
				onClick={() => {
					router.push("/users/");
				}}
			>
				Create
			</button>
		</>
	);
};

export default New;
