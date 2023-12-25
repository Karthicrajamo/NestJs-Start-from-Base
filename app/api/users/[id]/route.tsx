
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}:{ params: { id: number } }) {
    if (params.id > 10) 
        return NextResponse.json({error:'User not found'})
	return NextResponse.json({id:params.id});
}

export async function PUT(request: NextRequest, {params}: {params:{id:number}}){
    const body = await request.json()
    if(!body.name)
        return NextResponse.json({error: 'Name is Required'}, {status: 400})

    if (params.id > 10)
    return NextResponse.json({error: 'User Not Found'}, {status: 404})

    return NextResponse.json({id: 1, name:body.name}, {status: 200})
}
