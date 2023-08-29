import { NextResponse } from 'next/server'
import dbConnect from '../../db.config'


export async function  GET() {
    let client= await dbConnect()
    const db= client.db('SeatsDB')
const SeatsCollections=db.collection('SeatsCollections')
let result= await SeatsCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}
