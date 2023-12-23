import React from "react";
import UserTable from "./UserTable";

interface Props {
	searchParams: { sortOrder: string };
}

const UserDetailPage = ({ searchParams: { sortOrder } }: Props) => {
	return <UserTable sortOrder={sortOrder} />;
};

export default UserDetailPage;
