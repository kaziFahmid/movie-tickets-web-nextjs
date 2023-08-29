import { NextResponse } from 'next/server'
import dbConnect from '../../db.config'



export async function POST(request) {
    let booking= await request.json()
    let client= await dbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')

let result= await moviebookingsCollections.insertOne(booking)
  return NextResponse.json(result, { status: 500 })
}

export async function  GET() {
    let client= await dbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')
let result= await moviebookingsCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}

