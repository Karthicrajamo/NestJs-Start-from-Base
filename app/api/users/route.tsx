import { NextRequest, NextResponse } from "next/server";


// (request: NextRequest) is used to Not Cache data
export function GET(request: NextRequest){
    return NextResponse.json('hello')
}