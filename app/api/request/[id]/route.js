import connectMongoDb from "@/libs/mongodb";
import ToDO from "@/models/toDo";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTask: task, newCompleted: completed } = await request.json();
  await connectMongoDb();
  await ToDO.findByIdAndUpdate(id, { task, completed });
  return NextResponse.json({ message: "Task Updated" }, { status: 200 });
}

//to get the particular task:
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const todo = await ToDO.findOne({ _id: id });
  //matching the id of the database with the id we got from params.
  return NextResponse.json({ todo }, { status: 200 });
}
