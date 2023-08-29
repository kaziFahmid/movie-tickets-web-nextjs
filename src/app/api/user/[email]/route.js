import dbConnect from "@/app/db.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const client = await dbConnect();
    const db = client.db('movieusersDB');
    const movieUsersCollections = db.collection('movieUsersCollections');
    const email = params.email;

    const result = await movieUsersCollections.findOne({ email: email });
   
    if (result && result.role === "user") {
      return NextResponse.json({ result: true, message: "User has the role of 'user'" }, { status: 200 });
    }
    return NextResponse.json({ result: false, message: "User does not have the role of 'user'" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
