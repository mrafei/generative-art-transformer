import { NextResponse } from "next/server";
import signup from "@/helpers/api/auth/signup";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const user = await signup(body);
    return NextResponse.json(user.toJSON(), { status: 201 });
  } catch (e) {
    if (e instanceof CustomError)
      return NextResponse.json(
        { message: e.message },
        {
          status: e.statusCode,
        },
      );
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
