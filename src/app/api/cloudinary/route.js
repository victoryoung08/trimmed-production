import { NextResponse } from "next/server";
import cloudinary from "../../../utils/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 500,
    });
    return NextResponse.json(result);
  } catch (err) {
    console.log("Something went wrong with cloudinary", err);
  }
}
