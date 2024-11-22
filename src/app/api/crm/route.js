import { NextResponse } from "next/server";

const apiToken = process.env.AIRTABLE_APITOKEN;
const baseID = "appg8U95MBJc6ZS40";
const tableID = "tblRRv0c7Aos7eTCc";

const baseURL = "https://api.airtable.com/v0";

export async function POST(request) {
  try {
    const formBody = await request.json();
    console.log("Form data received:", formBody);
    const res = await fetch(`${baseURL}/${baseID}/${tableID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        records: [{ fields: formBody }],
      }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Airtable API Error:", errorData);
      throw new Error(
        `Airtable API Error: ${res.status} - ${JSON.stringify(errorData)}`
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data received successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("API Error Details: ", err);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Failed to process submission",
        error: err.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
