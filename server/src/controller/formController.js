const AdmissionFormModel = require("../models/Application");
exports.formData = async (req, res) => {
  try {
    const { registrationNumber } = req.body;
    const existingRegistrationNumber = await AdmissionFormModel.findOne({
      registrationNumber,
    });
    if (existingRegistrationNumber) {
      return res
        .status(403)
        .json({ message: "Regsitraion Number should be Unique" });
    }

    const formData = req.body;
    const admissionForm = new AdmissionFormModel(formData);
    await admissionForm.save();
    return res.status(200).json("Data saved successfully ");
  } catch (err) {
    return res.status(403).json("Something went wrong to save form data");
  }
};
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await AdmissionFormModel.find().sort({
      createdAt: -1,
    });
    return res.status(200).json(applications);
  } catch (err) {
    console.error("Error fetching applications:", err);
    return res.status(500).json({ message: "Failed to fetch applications" });
  }
};
