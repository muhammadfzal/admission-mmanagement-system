<<<<<<< Updated upstream
const Footer = () => {
  return (
    <footer className="bg-googleDark text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} University Admission Portal. All rights reserved.</p>
=======
<<<<<<< Updated upstream
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import UCPlogo from '../../src/assets/ucp-logof.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaMicrophone
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#112C4F] text-white px-6 md:px-20 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="w-64 h-24 bg-no-repeat bg-contain bg-left mb-4" style={{ backgroundImage: `url(${UCPlogo})` }}></div>
          
          {/* Social Icons */}
          <div className="grid grid-cols-5 gap-4 text-4xl py-3">
            <FaFacebookF className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaTwitter className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaLinkedinIn className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaYoutube className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaInstagram className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaApple className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
            <FaFacebook className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
             <FaMicrophone className="hover:text-white border border-white rounded-full p-2 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-left">USEFUL LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-300 text-left">
            <li><a href="/" className="hover:text-white">Student Portal</a></li>
            <li><a href="/Academic Calendar" className="hover:text-white">Academic Calendar</a></li>
            <li><a href="/Exam Office" className="hover:text-white">Exam Office</a></li>
            <li><a href="/Sustainability" className="hover:text-white">Sustainability</a></li>
            <li><a href="/Harassment Policy" className="hover:text-white">Harassment Policy</a></li>
            <li><a href="/Scholarships" className="hover:text-white">Scholarships</a></li>
            <li><a href="/Jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="/Verify Student" className="hover:text-white">Verify Student</a></li>
            <li><a href="/Tender Notice" className="hover:text-white">Tender Notice</a></li>
            <li><a href="/Rehnumai Markaz Portal" className="hover:text-white">Rehnumai Markaz Portal</a></li>
            <li><a href="/FAQs" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="">
          <h4 className="text-lg font-semibold mb-3 text-center">CONTACT US</h4>

          <p className="text-sm text-gray-300 text-left flex items-center gap-2">
            <FaMapMarkerAlt /> 1-Khayaban-e-Jinnah Road, Johar Town, Lahore
          </p>

          <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
            <FaPhoneAlt /> Phone: +92-42-35880007
          </p>

          <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
            <FaPhoneAlt /> (+92)80-000-827 (9:00AM to 5:00PM)
          </p>

          <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
            <FaEnvelope /> Email: info@ucp.edu.pk
          </p>

          <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
            <FaFax /> Fax: +92-42-35954892
          </p>
        </div>
      </div>

      <p className="mt-10 text-center">&copy; {new Date().getFullYear()} University Admission Portal. All rights reserved.</p>
=======
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from 'react-icons/fa';
import UCPlogo from '../../src/assets/ucp-logof.png';
const Footer = () => {
  return (

<footer className="bg-[#112C4F] text-white px-6 md:px-20 py-10">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Logo and About */}
    
        <div className='w-64  h-24 bg-no-repeat bg-contain bg-left'
      style={{backgroundImage: `url(${UCPlogo})`}}>
    
   </div>
    
   
              
    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-3 text-left">USEFUL LINKS</h4>
      <ul className="space-y-2 text-sm text-gray-300 text-left ">
        <li><a href="/" className="hover:text-white">Student Portal</a></li>
        <li><a href="/Academic Clander" className="hover:text-white">Academic Clander</a></li>
        <li><a href="/Exam Office" className="hover:text-white">Exam Office</a></li>
        <li><a href="/Sustainbility" className="hover:text-white">Sustainbility</a></li>
        <li><a href="/Harassment Policy">Harassment Policy</a></li>
        <li><a href="/Scholarships">Scholarships</a></li>
        <li><a href="/Jobs">Jobs</a></li>
        <li><a href="/Verify Student">Verify Student</a></li>
        <li><a href="/Tender Notice">Tender Notice</a></li>
        <li><a href="/Rehnumai Markaz Portal">Rehnumai Markaz Portal</a></li>
        <li><a href="/FAQs">FAQs</a></li>
      </ul>
    </div>


    {/* Contact */}
   <div className="">
  <h4 className="text-lg font-semibold mb-3 text-center">CONTACT US</h4>
  
  <p className="text-sm text-gray-300 text-left flex items-center gap-2">
    <FaMapMarkerAlt /> 1-Khayaban-e-Jinnah Road, Johar Town, Lahore
  </p>

  <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
    <FaPhoneAlt /> Phone: +92-42-35880007
  </p>

  <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
    <FaPhoneAlt /> (+92)80-000-827 (9:00AM to 5:00PM)
  </p>

  <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
    <FaEnvelope /> Email: info@ucp.edu.pk
  </p>

  <p className="text-sm text-gray-300 mt-2 text-left flex items-center gap-2">
    <FaFax /> Fax: +92-42-35954892
  </p>
</div>

  
</div>

      
      <p className="mt-10">&copy; {new Date().getFullYear()} University Admission Portal. All rights reserved.</p>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </footer>
  );
};

export default Footer;
