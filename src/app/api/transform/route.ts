import { NextResponse } from "next/server";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";
import transform from "@/helpers/api/images/transform";
import parseToken from "@/utils/parseToken";
import HTTPStatusCodes from "@/constants/http";
import { headers } from 'next/headers'

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const headersList = headers();
    const authHeader = headersList.get("Authorization");
    if (!authHeader)
      throw new CustomError("Unauthorized!", HTTPStatusCodes.Unauthorized);
    const artwork = await transform({
      ...body,
      token: parseToken(authHeader),
    });
    return NextResponse.json(artwork, { status: 200 });
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
