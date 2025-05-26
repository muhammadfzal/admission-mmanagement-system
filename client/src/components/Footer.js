import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from 'react-icons/fa';
import UCPlogo from '../assets/ucp-logof.png';

const Footer = () => (
  <footer className="bg-[#112C4F] text-white px-6 md:px-20 py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Logo */}
      <div
        className="w-64 h-24 bg-no-repeat bg-contain bg-left"
        style={{ backgroundImage: `url(${UCPlogo})` }}
      />

      {/* Useful Links */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-left">USEFUL LINKS</h4>
        <ul className="space-y-2 text-sm text-gray-300 text-left">
          {[
            'Student Portal',
            'Academic Calendar',
            'Exam Office',
            'Sustainability',
            'Harassment Policy',
            'Scholarships',
            'Jobs',
            'Verify Student',
            'Tender Notice',
            'Rehnumai Markaz Portal',
            'FAQs',
          ].map((link) => (
            <li key={link}>
              <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-left">CONTACT US</h4>
        <div className="space-y-2 text-sm text-gray-300 text-left">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 1-Khayaban-e-Jinnah Road, Johar Town, Lahore
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +92-42-35880007
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> (+92)80-000-827 (9:00AM to 5:00PM)
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> info@ucp.edu.pk
          </p>
          <p className="flex items-center gap-2">
            <FaFax /> +92-42-35954892
          </p>
        </div>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-300">
      &copy; {new Date().getFullYear()} University Admission Portal. All rights reserved.
    </p>
  </footer>
);

export default Footer;
