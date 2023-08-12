import { NextResponse } from "next/server";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";
import parseToken from "@/utils/parseToken";
import HTTPStatusCodes from "@/constants/http";
import { headers } from "next/headers";
import getUser from "@/helpers/api/user/get";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const headersList = headers();
    const authHeader = headersList.get("Authorization");
    const token = parseToken(authHeader || "");
    const user = await getUser({
      token,
    });
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
