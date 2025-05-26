import { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
  const initialFormData = {
    branch: "",
    registrationNumber: "",
    studentPhotoUrl: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    admissionClass: "",
    fatherInfo: {
      relation: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      educationQualification: "",
      residentialAddress: "",
    },
    motherInfo: {
      relation: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      educationQualification: "",
      residentialAddress: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("fatherInfo.") || name.startsWith("motherInfo.")) {
      const [parent, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form/formdata",
        formData
      );
      alert("Form submitted successfully");
      setFormData(initialFormData);
    } catch (err) {
      console.error(err);

      // Check if backend returned duplicate registration number error
      if (
        err.response &&
        err.response.status === 403 &&
        err.response.data?.message === "Regsitraion Number should be Unique"
      ) {
        alert(
          "This registration number already exists. Please enter a unique one."
        );
      } else {
        alert("Error submitting form. Please try again.");
      }
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">
        Application Form For Admission
      </h2>
      <form onSubmit={handleSubmit}>
        {/* General Info */}
        <div className="flex gap-4">
          <select
            name="branch"
            className="w-full border px-3 py-2"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="CS">Computer Science</option>
            <option value="EE">Electrical Engineering</option>
            <option value="BBA">Business Administrations</option>
          </select>
          <input
            type="text"
            name="registrationNumber"
            placeholder="Registration Number"
            className="w-full border px-3 py-2"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="studentPhotoUrl"
            placeholder="Paste student photo URL"
            className="w-full border px-3 py-2"
            value={formData.studentPhotoUrl}
            onChange={handleChange}
          />
        </div>

        {/* Student Name */}
        <div className="flex gap-4 mt-4">
          <input
            name="firstName"
            placeholder="First Name"
            className="w-full border px-3 py-2"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="middleName"
            placeholder="Middle Name"
            className="w-full border px-3 py-2"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="w-full border px-3 py-2"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender, DOB, Class */}
        <div className="flex gap-4 mt-4">
          <select
            name="gender"
            className="w-full border px-3 py-2"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="dateOfBirth"
            className="w-full border px-3 py-2"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <select
            name="admissionClass"
            className="w-full border px-3 py-2"
            value={formData.admissionClass}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Program --</option>
            <option value="BSCS">BSCS</option>
            <option value="BBA">BBA</option>
            <option value="BSSE">BS Software Engineering</option>
            <option value="MBA">MBA</option>
            <option value="MSCS">MSCS</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        {/* Father's Info */}
        <h2 className="mt-6 font-bold text-lg">Father's Info</h2>
        <div className="flex gap-4 flex-wrap">
          {Object.entries(formData.fatherInfo).map(([key, val]) => (
            <input
              key={key}
              name={`fatherInfo.${key}`}
              placeholder={`Father ${key}`}
              value={val}
              onChange={handleChange}
              className="w-[32%] border px-3 py-2 mt-2"
              required
            />
          ))}
        </div>

        {/* Mother's Info */}
        <h2 className="mt-6 font-bold text-lg">Mother's Info</h2>
        <div className="flex gap-4 flex-wrap">
          {Object.entries(formData.motherInfo).map(([key, val]) => (
            <input
              key={key}
              name={`motherInfo.${key}`}
              placeholder={`Mother ${key}`}
              value={val}
              onChange={handleChange}
              className="w-[32%] border px-3 py-2 mt-2"
              required
            />
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
