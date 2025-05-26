import { useEffect, useState } from "react";
import { getApplications } from "../service/api";
import DashboardLayout from "../components/DashBoardLayout";
import { Bell } from "lucide-react";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [newApplications, setNewApplications] = useState(false);

  useEffect(() => {
    let previousCount = 0;

    const fetchApplications = async () => {
      try {
        const data = await getApplications();

        if (data.length > previousCount) {
          setNewApplications(true);
        }
        previousCount = data.length;
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications", error);
      }
    };

    fetchApplications();

    const interval = setInterval(fetchApplications, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleViewApplications = () => {
    setNewApplications(false);
  };

  return (
    <DashboardLayout>
      <div className="p-10 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="relative">
            <button
              className="relative text-gray-600 hover:text-blue-600"
              onClick={handleViewApplications}
              title="New Applications"
            >
              <Bell className="w-6 h-6" />
              {newApplications && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  !
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-max w-full table-auto text-sm text-left bg-white shadow rounded">
            <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-4 whitespace-nowrap">Photo</th>
                <th className="p-4 whitespace-nowrap">Name</th>
                <th className="p-4 whitespace-nowrap">Reg No</th>
                <th className="p-4 whitespace-nowrap">Class</th>
                <th className="p-4 whitespace-nowrap">Branch</th>
                <th className="p-4 whitespace-nowrap">Gender</th>
                <th className="p-4 whitespace-nowrap">DOB</th>
                <th className="p-4 whitespace-nowrap">Father Name</th>
                <th className="p-4 whitespace-nowrap">Mother Name</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((record) => (
                <tr key={record._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    {record.studentPhotoUrl ? (
                      <img
                        src={record.studentPhotoUrl}
                        alt="Student"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">
                        N/A
                      </div>
                    )}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {record.firstName} {record.middleName} {record.lastName}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {record.registrationNumber}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {record.admissionClass}
                  </td>
                  <td className="p-4 whitespace-nowrap">{record.branch}</td>
                  <td className="p-4 whitespace-nowrap">{record.gender}</td>
                  <td className="p-4 whitespace-nowrap">
                    {new Date(record.dateOfBirth).toLocaleDateString()}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {record.fatherInfo?.firstName} {record.fatherInfo?.lastName}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {record.motherInfo?.firstName} {record.motherInfo?.lastName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {applications.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No applications found.
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
