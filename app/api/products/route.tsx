import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request:NextRequest){
	const product = await prisma.products.findMany()
	return NextResponse.json(product)
}

// export function GET(request: NextRequest) {
// 	return NextResponse.json([
// 		{
// 			id: 1,
// 			name: "Milk",
// 			price: 2.5,
// 		},
// 		{
// 			id: 2,
// 			name: "Curd",
// 			price: 3.5,
// 		},
// 	]);
// }

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);

	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);

	const product = await prisma.products.create({
		data: { name: body.name, price: body.price },
	});

	return NextResponse.json(product, { status: 201 });
}

// export async function POST(request: NextRequest) {
// 	const body = await request.json();
// 	const validation = schema.safeParse(body);
// 	if (!validation.success)
// 		return NextResponse.json(
// 			{ error: validation.error.errors },
// 			{ status: 400 }
// 		);
// 	return NextResponse.json({id:2, ...body}, {status:201});
// }
