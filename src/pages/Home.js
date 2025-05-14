import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../src/assets/ucp.png'
import chairmanImg from '../../src/assets/chairman.png'
import IPRS from '../../src/assets/IPRs-2024.png'
import UCPimg from '../../src/assets/UCP-x-TCN.png'
import imgName from '../../src/assets/moment_img.png'


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* Header */}
      {/* <header className="bg-[#202124] text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">University Name</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/admission" className="hover:text-gray-300">Admission</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
    <section
  className="w-full h-[400px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    {/* <h2 className="text-white text-4xl md:text-5xl font-bold">
      Welcome to Our University
    </h2> */}
  </div>
</section>
  
  {/*Special Moments*/}
<section>
         <h1 className='font-bold text-2xl  md:text-4xl mx-20 text-left py-10 text-[#112C4F] '>In the Moment</h1>
       <div className='flex flex-col md:flex-row gap-6'>
         {/* Left Side - One Large Image */}
         <div className=' w-1/2 mx-20 mb-10 h-[410px] bg-cover bg-center rounded'
           style={{background: `url(${IPRS})`}}>
            
         </div>
        
       {/* Right - Two stacked images */}
  <div className="w-full md:w-1/2 flex flex-col gap-6 mx-20">
    <div
      className="h-[195px] bg-cover bg-center rounded"
      style={{ backgroundImage: `url(${UCPimg})` }}
    ></div>
    <div
      className="h-[195px] bg-cover bg-center rounded"
      style={{ backgroundImage: `url(${imgName})` }}
    ></div>
  </div>
       </div>
</section>

         {/*Button*/} 
      <button
           type="submit"
           className=" hover:bg-[#112C4F] text-white bg-[#112C4F]  py-4 px-8 mb-10 mt-10 rounded"
        > More UCP News
        </button>
     {/*Course section*/}
    <section>
             <h1 className='font-bold text-2xl  md:text-4xl mx-20 text-left py-10 text-[#112C4F] '>Find a Course</h1>
             <form>
              <input
              placeholder='Enter a Course name or Keyword here:'
               className='w-1/2 border border-gray-300 py-3 px-3  rounded '
              />
             </form>
    </section>

      {/* Chairman Message */}
     <section className="w-full bg-googleDark from-blue-900 to-blue-800 text-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Chairman's Message</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Chairman Image */}
          <img
            src={chairmanImg}
            alt="Chairman"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
          />

          {/* Message Text */}
          <div className="text-left max-w-2xl">
            <p className="text-xl italic mb-4">
              <span className="text-3xl font-bold text-white mr-2">“</span>
              We aim to make our students adaptable to change so that they may thrive in a rapidly evolving job market;
              critical thinkers to be able to identify problems in our society and; creative to come up with pragmatic
              solutions.
              <span className="text-3xl font-bold text-white ml-2">”</span>
            </p>
            <p className="font-bold text-lg mt-4">Mian Amer Mahmood</p>
            <p className="text-sm text-gray-300">Chairman, UCP</p>
          </div>
        </div>
      </div>
    </section>

      {/* Moments */}
      {/* <section className="py-10 px-4 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold mb-6">Moments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/moment1.jpg" alt="Moment 1" className="rounded shadow-md" />
          <img src="/moment2.jpg" alt="Moment 2" className="rounded shadow-md" />
          <img src="/moment3.jpg" alt="Moment 3" className="rounded shadow-md" />
        </div>
      </section> */}

      {/* Apply Now */}
      <section className="py-10 px-4 text-center bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4">Ready to Join Us?</h3>
        <button
          onClick={() => navigate('/sign-in')}
          className="bg-googleDark text-white py-2 px-6 rounded hover:bg-gray-800 transition"
        >
          Apply Now
        </button>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#202124] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
