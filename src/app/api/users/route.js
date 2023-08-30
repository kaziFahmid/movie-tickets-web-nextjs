import DbConnect from '@/db.config'
import { NextResponse } from 'next/server'




export async function POST(request) {
    let user= await request.json()
    let client= await DbConnect()
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
    let client= await DbConnect()
    const db= client.db('movieusersDB')
const movieUsersCollections=db.collection('movieUsersCollections')
let result= await movieUsersCollections.find().toArray()
  return NextResponse.json(result, { status: 500 })
}

