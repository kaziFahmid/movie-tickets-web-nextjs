import DbConnect from '@/db.config'
import { NextResponse } from 'next/server'



export async function  GET() {
    let client= await DbConnect()
    const db= client.db('SeatsDB')
const SeatsCollections=db.collection('SeatsCollections')
let result= await SeatsCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}
