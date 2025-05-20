import React from 'react';
import{ FaPhone, FaEnvelope, FaMapMarkerAlt } from  'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-white text-black min-h-screen  px-6 md:px-20 py-10">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='space-y-6'> 
       <h1 className="text-4xl font-bold text-[#112C4F]">Contact Us</h1>
      <p className='text-gray-700 text-base leading-relaxed'> You can contact us via phone, email, or visit our office at the given address.  <br/>
       We are also available on various social media platforms. We look forward to hearing from you! </p>
     </div> 
     <div className='space-y-4'>
         <div className='flex item-center gap-3 text-lg text-gray-800'>
           <FaPhone/><p>+92-42-35880007</p>
         </div>
          <div className='flex text-gray-800 text-lg text-center gap-3'>
            <FaEnvelope/><p> info@ucp.edu.pk</p>
            </div>
          <div className='flex text-center text-lg text-gray-800 gap-3'>
            <FaMapMarkerAlt /><p>1-Khayaban-e-Jinnah Road, Johar Town, Lahore</p>
          </div>
        </div>
      </div>
        
        <div className='bg-gray-100 p-6 rounded-fullshadow-md '>
          <h2 className='text-2xl font-semibold mb-4 text-[#112C4F]'>
              Send Us a Message
          </h2>
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <form>
                <div>
                  <albel className="block font-medium text-left mx-2">First Name </albel>
                <input 
                type='text'
                placeholder='Enter Your Name : '
                className='py-2 px-3 w-full border border-gray-300 rounded  '
                />
                </div>
                <div className=''>
                  <label className='text-left font-medium block mx-2'>Last Name</label>
                <input 
                type='text'
                placeholder='Enter Your Last Name : '
                className='py-2 px-3 w-full border border-gray-300 rounded'
                />
                </div>
                <div>
                    <label className='text-left font-medium block mx-2'>Email</label>
                <input 
                type='email'
                placeholder='Enter Your Email : '
                className='py-2 px-3 w-full border border-gray-300 rounded'
                />
                </div>
                  <div>
                    <label className='text-left font-medium block mx-2'>Phone No.</label>
                <input 
                type='Phone No.'
                placeholder='Enter Your Phone No. : '
                className='py-2 px-3 w-full border border-gray-300 rounded'
                />
                </div>
                
      <div class="">
         <label htmlFor="message" class="block  text-left font-medium mx-2">Your message</label>
        <textarea id="message" rows="4" class="py-2 px-3 w-full border border-gray-300 rounded " placeholder="Leave a comment..."></textarea>
              </div>
                    <div className="mt-8 text-left">
         <button
           type="submit"
           className="bg-[#112C4F] hover:bg-white-700 text-white font-bold py-2 px-6 rounded"
        >
          Send Message
        </button>
        </div>
              </form>
            </div>
          </div>
        </div>
    </div>
   
  );
};

export default ContactPage;

