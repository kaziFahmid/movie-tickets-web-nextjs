import DbConnect from '@/db.config'
import { NextResponse } from 'next/server'



export async function  GET() {
    let client= await DbConnect()
    const db= client.db('moviesDB')
const moviesCollections=db.collection('moviesCollections')
let result= await moviesCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}
