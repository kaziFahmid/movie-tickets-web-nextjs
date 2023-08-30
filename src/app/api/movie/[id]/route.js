import { NextResponse } from 'next/server'

import { ObjectId } from 'mongodb'

import DbConnect from '@/db.config'


export async function  GET(request,{params}) {
    let client= await DbConnect()
    const db= client.db('moviesDB')
const moviesCollections=db.collection('moviesCollections')
let result= await moviesCollections.findOne({_id: new ObjectId(params.id)})
  return NextResponse.json(result, { status: 500 })
}
