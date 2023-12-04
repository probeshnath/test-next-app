import { NextResponse } from "next/server"

// get api
export const GET = ()=>{
   return NextResponse.json({message:"Hello world"});
}

// post api
export const POST = () =>{}

// patch api
export const PATCH = () =>{}

// DELETE api
export const DELETE = () =>{}