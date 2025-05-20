const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  personal: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
  },
  academic: {
    highschool: { type: String, required: true },
    grade: { type: String, required: true },
    marks: { type: Number, required: true },
  },
  documents: [
    {
      name: { type: String },
      url: { type: String },
    },
  ],
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  submittedAt: { type: Date, default: Date.now },
});
