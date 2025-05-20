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
    </footer>
  );
};

export default Footer;
