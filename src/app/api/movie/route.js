import { NextResponse } from 'next/server'
import dbConnect from '../../db.config'


export async function  GET() {
    let client= await dbConnect()
    const db= client.db('moviesDB')
const moviesCollections=db.collection('moviesCollections')
let result= await moviesCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}
