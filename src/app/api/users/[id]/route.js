import dbConnect from "@/app/db.config";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  try {
    const client = await dbConnect();
    const db = client.db('movieusersDB');
    const movieUsersCollections = db.collection('movieUsersCollections');
    const id = params.id;

    const filter = { _id: new ObjectId(id) };
    const updatedRole = await request.json();

    const result = await movieUsersCollections.updateOne(
      filter,
      { $set: { role: updatedRole.role } }
    );

    return new NextResponse.JSON(result, { status: 200 }); // Use status 200 for success
  } catch (error) {
    return new NextResponse.JSON({ message: "Error" }, { status: 500 });
  }
}
