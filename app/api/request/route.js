import connectMongoDb from "@/libs/mongodb";
import ToDO from "@/models/toDo";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { task, completed } = await request.json();
  //get the data from the request in the json format, already destructed.
  await connectMongoDb();
  //connect to our database
  await ToDO.create({ task, completed });
  return NextResponse.json({ message: "Task Added" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const todos = await ToDO.find();
  return NextResponse.json({ todos });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  //to get the id which we want to delete
  await connectMongoDb();
  await ToDO.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted!!!" });
}
