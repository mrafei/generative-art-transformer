import { NextResponse } from "next/server";
import login from "@/helpers/api/auth/login";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const user = await login(body);
    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    if (e instanceof CustomError)
      return NextResponse.json(
        { message: e.message },
        {
          status: e.statusCode,
        },
      );
    return NextResponse.json({ message: String(e) }, { status: 500 });
  }
}
