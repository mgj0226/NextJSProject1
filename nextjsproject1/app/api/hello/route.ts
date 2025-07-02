import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello from API!" });
}

export async function POST(req: Request) {
    const data = await req.json();
    const { name, age } = data;
    console.log("Received data:", data);
    return NextResponse.json({ message: `Hello ${name} from API!`, data: { name, age } });
}