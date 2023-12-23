import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

import React from "react";

const layout = ({ children }: Props) => {
	return (
		<>
			<div className="flex">
				<div className="bg-slate-200 p-5 mr-5">layout</div>
				<div>{children}</div>
			</div>
		</>
	);
};

export default layout;
