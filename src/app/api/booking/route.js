import { NextResponse } from 'next/server'

import DbConnect from '../../../db.config'



export async function POST(request) {
    let booking= await request.json()
    let client= await DbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')

let result= await moviebookingsCollections.insertOne(booking)
  return NextResponse.json(result, { status: 500 })
}

export async function  GET() {
    let client= await DbConnect()
    const db= client.db('moviebookingsDB')
const moviebookingsCollections=db.collection('moviebookingsCollections')
let result= await moviebookingsCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}

