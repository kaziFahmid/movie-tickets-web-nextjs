import DbConnect from "@/db.config";

import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";


export async function PATCH(request, { params }) {
  try {
    const client = await DbConnect();
    const db = client.db('moviebookingsDB');
    const moviebookingsCollections = db.collection('moviebookingsCollections');
    const id = params.id;

    const filter = { _id: new ObjectId(id) };
    const updatedStatus = await request.json();

    const result = await moviebookingsCollections.updateOne(
      filter,
      { $set: { status: updatedStatus.status } }
    );

    return new NextResponse.JSON(result, { status: 200 }); // Use status 200 for success
  } catch (error) {
    return new NextResponse.JSON({ message: "Error" }, { status: 500 });
  }
}
