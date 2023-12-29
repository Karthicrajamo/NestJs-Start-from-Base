import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});
	if (!user)
		return NextResponse.json({ error: "User not Found" }, { status: 404 });
	return NextResponse.json({ user });
}

// export function GET(request: NextRequest, {params}:{ params: { id: number } }) {
//     if (params.id > 10)
//         return NextResponse.json({error:'User not found'})
// 	return NextResponse.json({id:params.id});
// }

// PUT
export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);

	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});

	if (!user) {
		return NextResponse.json(
			{ error: "User does not exists" },
			{ status: 404 }
		);
	}

	const UpdateUser = await prisma.user.update({
		where: { id: user.id },
		data: { name: body.name, email: body.email },
	});

	return NextResponse.json({ UpdateUser }, { status: 200 });
}

// DELETE
export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
	});
	if (!user)
		return NextResponse.json({ error: "User not Found" }, { status: 404 });

	const DeleteUser = await prisma.user.delete({ where: { id: user.id } });

	return NextResponse.json(DeleteUser)
}

// export async function PUT(
// 	request: NextRequest,
// 	{ params }: { params: { id: number } }
// ) {
// 	const body = await request.json();
// 	const validation = schema.safeParse(body);
// 	if (!validation.success)
// 		return NextResponse.json(
// 			{ error: validation.error.errors },
// 			{ status: 400 }
// 		);

// 	if (params.id > 10)
// 		return NextResponse.json({ error: "User Not Found" }, { status: 404 });

// 	return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
// }
