'use client'
import React from "react";

interface Props {
	error: string;
	retry: () => void;
}

const error = ({ error, retry }: Props) => {
	return (
		<>
			<div>error</div>
			<button className="btn" onClick={()=> retry()}>Retry</button>
		</>
	);
};

export default error;
