const mongoose = require("mongoose");
const {
  Branch,
  Gender,
  Relation,
  EducationQualification,
  AdmissionClass,
} = require("../enums"); // <-- import all enums here

const ParentInfoSchema = new mongoose.Schema(
  {
    relation: {
      type: String,
      enum: Object.values(Relation),
      required: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    educationQualification: {
      type: String,
      enum: Object.values(EducationQualification),
      required: true,
    },
    residentialAddress: { type: String, required: true },
  },
  { _id: false }
);

const AdmissionFormSchema = new mongoose.Schema({
  branch: {
    type: String,
    enum: Object.values(Branch),
    required: true,
  },
  registrationNumber: { type: String, required: true, unique: true },
  studentPhotoUrl: { type: String }, // store file URL or path

  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },

  gender: {
    type: String,
    enum: Object.values(Gender),
    required: true,
  },
  dateOfBirth: { type: Date, required: true },

  admissionClass: {
    type: String,
    enum: Object.values(AdmissionClass),
    required: true,
  },

  fatherInfo: { type: ParentInfoSchema, required: true },
  motherInfo: { type: ParentInfoSchema, required: true },
});

const AdmissionFormModel = mongoose.model("AdmissionForm", AdmissionFormSchema);

module.exports = AdmissionFormModel;
