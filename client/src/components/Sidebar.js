import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-900 text-white fixed top-0 left-0 flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-blue-700">AMS</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <NavLink to="/admin/dashboard" className="block hover:text-blue-300">
          <FaHome className="inline-block mr-2" /> Dashboard
        </NavLink>
        <NavLink to="/admin/dashboard" className="block hover:text-blue-300">
          <FaClipboardList className="inline-block mr-2" /> Attendance
        </NavLink>
        <NavLink to="/admin/dashboard" className="block hover:text-blue-300">
          <FaUserGraduate className="inline-block mr-2" /> Students
        </NavLink>
        <NavLink to="/admin/dashboard" className="block hover:text-blue-300">
          <FaChalkboardTeacher className="inline-block mr-2" /> Teachers
        </NavLink>
        {/* Add other links like Notice Board, Parents, Result, etc. */}
      </div>
    </div>
  );
};

export default Sidebar;
