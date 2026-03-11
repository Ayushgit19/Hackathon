import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true },
  location: String,
  maxAttendees: Number,
  attendees: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["published", "cancelled", "completed"],
    default: "published"
  }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
