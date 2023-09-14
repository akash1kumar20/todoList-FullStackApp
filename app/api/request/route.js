import connectMongoDb from "@/libs/mongodb";
import ToDO from "@/models/toDo";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { task } = await request.json();
  //get the data from the request in the json format, already destructed.
  await connectMongoDb();
  //connect to our database
  await ToDO.create({ task });
  return NextResponse.json({ message: "Task Added" }, { status: 201 });
}
