import { NextResponse } from "next/server";
import CustomError from "@/utils/CustomError";
import dbConnect from "@/helpers/api/dbconnect";
import getArtList from "@/helpers/api/art/list";

export async function GET() {
  try {
    await dbConnect();
    const arts = await getArtList();
    return NextResponse.json({ arts }, { status: 200 });
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
