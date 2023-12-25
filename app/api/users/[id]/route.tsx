import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}:{ params: { id: number } }) {
    if (params.id > 10) 
        return NextResponse.json({error:'User not found'})
	return NextResponse.json({id:params.id});
}

export async function POST(request: NextRequest){
    const body = await request.json()
    if(!body.name)
        return 
    return NextResponse.json({id: 1, name:body.name})
}
