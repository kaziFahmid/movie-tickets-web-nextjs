
import { NextResponse } from 'next/server'
import dbConnect from '@/app/db.config' 





export async function  GET(request,{params}) {

    let client= await dbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')

let result= await moviebookingsCollections.find({email: params?.email}).toArray()
  return NextResponse.json(result, { status: 500 })
}

