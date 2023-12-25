import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

// (request: NextRequest) is used to Not Cache data
// export function GET(request: NextRequest){
//     return NextResponse.json('hello')
// }

export async function POST(request: NextRequest) {
	const body = await request.json();
	if (!body.name)
		return NextResponse.json({ error: "Name not found" }, { status: 404 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
