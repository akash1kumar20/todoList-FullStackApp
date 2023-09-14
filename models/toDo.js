import mongoose, { Schema } from "mongoose";
const toDoSchema = new Schema(
  {
    task: String,
    completed: Boolean,
    //We're defineing what variable have what kind of the data.
  },
  {
    timestamps: true,
    //timetamps give us automatically when the data is created and updated.
  }
);
//toDoSchema is our schema here.
const ToDO = mongoose.models.ToDO || mongoose.model("ToDO", toDoSchema);
//here we're saying that if the model is present then use that model, or create new one in other case.
export default ToDO;
