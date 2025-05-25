const profile = require("../assets/maryam.jpg");
const Header = () => {
  return (
    <div className="  h-16 flex items-center justify-end pr-6 fixed left-64 right-0 top-0 z-10">
      <div className="text-gray-700 font-semibold flex items-center space-x-2">
        <span>Marryam Ashraf</span>
        <img
          src={profile}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
