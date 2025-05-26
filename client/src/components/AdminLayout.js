import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
        <Header />
        <div className="pt-20 px-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
