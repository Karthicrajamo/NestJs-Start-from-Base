import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// (request: NextRequest) is used to Not Cache data
export function GET(request: NextRequest) {
	return NextResponse.json([
		{ "id": 1, "name": "karthic", "email": "kar@gmail.com" },
		{ "id": 2, "name": "tom", "email": "kar@gmail.com" },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body)
	// if (!body.name)
	if (!validation.success)
		return NextResponse.json({ error: validation.error.errors }, { status: 404 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
