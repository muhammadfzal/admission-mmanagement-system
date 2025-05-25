import React from "react";

const ApplicationCard = ({ title, description, status }) => {
  // status colors mapping
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    default: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
          statusStyles[status] || statusStyles.default
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default ApplicationCard;
