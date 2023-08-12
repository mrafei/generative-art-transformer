import { NextResponse } from "next/server";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";
import parseToken from "@/utils/parseToken";
import transform from "@/helpers/api/art/transform";
import { headers } from "next/headers";
import getUser from "@/helpers/api/user/get";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const headersList = headers();
    const authHeader = headersList.get("Authorization");
    const token = parseToken(authHeader || "");
    const user = await getUser({ token });
    const artwork = await transform({
      ...body,
      userId: user._id.toString(),
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
