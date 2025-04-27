import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    console.log("request");
    console.log(request);
    console.log(request.url);
    return NextResponse.json({ message: 'Hello, world!' });
}