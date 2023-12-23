import React from "react";

interface Props {
	params: { photoid: number; id: number };
}

const page = ({ params: { photoid, id } }: Props) => {
	return (
		<div>
			page {photoid} {id}
		</div>
	);
};

export default page;
