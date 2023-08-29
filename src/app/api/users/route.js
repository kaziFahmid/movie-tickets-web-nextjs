import { NextResponse } from 'next/server'
import dbConnect from '../../db.config'



export async function POST(request) {
    let user= await request.json()
    let client= await dbConnect()
    const db= client.db('movieusersDB')
const movieUsersCollections=db.collection('movieUsersCollections')
let existingUser= await movieUsersCollections.findOne({email: user.email})
if(existingUser){
    return NextResponse.json({message:"user already exist"}, { status: 500 })
}
let result= await movieUsersCollections.insertOne(user)
  return NextResponse.json(result, { status: 500 })
}

export async function  GET() {
    let client= await dbConnect()
    const db= client.db('movieusersDB')
const movieUsersCollections=db.collection('movieUsersCollections')
let result= await movieUsersCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}

