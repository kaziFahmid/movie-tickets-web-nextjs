
import DbConnect from '@/db.config'
import { NextResponse } from 'next/server'






export async function  GET(request,{params}) {

    let client= await DbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')

let result= await moviebookingsCollections.find({email: params?.email}).toArray()
  return NextResponse.json(result, { status: 500 })
}

