// src/pages/AdmissionForm.jsx
const AdmissionForm = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Application Form For Admission</h2>
      <p className="text-gray-700 mb-4">Please fill out the admission form carefully with accurate information. All fields marked with 
         are mandatory for processing your application.</p>
       <div>
        <h2 className="text-xl font-semibold mb-4">Admission at UCP University</h2>
        <form>
           {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4">
           {/* Branch */}
              <div className="flex-1">
                <label className="block mb-1 font-medium text-left">Please Select Branch</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">choose...</option>
                  <option value="CS">Computer Science</option>
                  <option value="EE">Electrical Engineering</option>
                  <option value="BBA">Business Administrations</option>                
                </select>
              </div>
               {/* Registration Number */}
               <div className="flex-1">
                  <label className="block mb-1 font-medium text-left">Registration Number</label>
                  <input
                  type="text"
                  placeholder="Enter Rsgistration number : "
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  />
               </div>
                {/* Student Photo */}
                <div className="flex-1">
                     <label className="block mb-1 font-medium text-left">Photo of Student</label>
                     <input
                     type="file"
                     className="w-full border border-gray-300 rounded px-3 py-2"
                     />
                </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4" >
          <div className="flex-1">
          <label className="block mb-1 font-medium text-left">First Name</label>
         <input
         type="text"
         placeholder="Enter Your Name : "
         className="w-full border border-gray-300 rounded px-3 py-2"
         />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-left">Middel Name</label>
          <input
           type="text"
           placeholder="Enter Your Middel Name : "
           className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
            <div className="flex-1">
          <label className="block mb-1 font-medium text-left">Last Name</label>
          <input
           type="text"
           placeholder="Enter Your Last Name : "
           className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div> 
     </div>
     <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Select Gender</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Femalle">Female</option>
            <option value="Other">Other</option>
          </select>
      </div>      
      <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Date of Birth</label>
           <input
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2"
            />
      </div>
        <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Admission To Class</label>
          <select className="w-full border border-gray-300 rounder px-3 py-2">
            <option value="">-- Select Program --</option>
             <option value="BSCS">BSCS</option>
             <option value="BBA">BBA</option>
             <option value="BSSE">BS Software Engineering</option>
             <option value="MBA">MBA</option>
             <option value="MSCS">MSCS</option>
             <option value="PhD">PhD</option>
          </select>
      </div> 
      </div>
      <h1 className="font-bold py-5 text-left">*Parents/Guardian</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-left">Chosse Relation</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>--Select--</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Brother</option>
            <option>Sister</option>
          </select>
        </div>
        <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Father First Name</label>
         <input
         type="text"
         placeholder="Enter First Name : "
         className="w-full border border-gray-300 rounded px-3 py-2"
         />
        </div>
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Father Last Name</label>
         <input
         type="text"
         placeholder="Enter Last Name : "
         className="w-full border border-gray-300 rounded px-3 py-2"
         />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
         {/* Email Address */}
          <div className="flex-1">
             <label className="block mb-1 font-medium text-left">Email Address : </label>
           <input 
           type="email"
           placeholder="Enter Your Email"
           className="w-full border border-gray-300 rounded px-3 py-2"
           />
          </div>
           {/* Phone Number */}
          <div className="flex-1">
             <label className="block mb-1 font-medium text-left">Phone No. : </label>
           <input 
           type="number"
           placeholder="Enter Your Phone No."
           className="w-full border border-gray-300 rounded px-3 py-2"
           />
          </div>
            {/* Education Qualification */}
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Education Qualification : </label>
           <select  className="w-full border border-gray-300 rounded px-3 py-2">
           <option value="">-- Select Qualification --</option>
           <option value="Matric">Matric</option>
           <option value="Intermediate">Intermediate</option>
           <option value="Bachelor">Bachelor</option>
           <option value="Master">Master</option>
           <option value="PhD">PhD</option>
           <option value="M.phil">M.phil</option>
           <option value="Other">Other</option>
           </select>
          </div>
      </div>
         <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Residential Addres of the Parent/Guardian: </label>
           <textarea
           placeholder="Please type tour address here..."
           className="w-full  border border-gray-300 rounded px-3 py-2"
           > 
           </textarea>
          </div>
         </div>
         {/* Mother Information */}
          <h1 className="font-bold py-5 text-left">*Parents/Guardian</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-left">Chosse Relation</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>--Select--</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Brother</option>
            <option>Sister</option>
          </select>
        </div>
        <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Mother First Name</label>
         <input
         type="text"
         placeholder="Enter First Name : "
         className="w-full border border-gray-300 rounded px-3 py-2"
         />
        </div>
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Mother Last Name</label>
         <input
         type="text"
         placeholder="Enter Last Name : "
         className="w-full border border-gray-300 rounded px-3 py-2"
         />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
         {/* Email Address */}
          <div className="flex-1">
             <label className="block mb-1 font-medium text-left">Email Address : </label>
           <input 
           type="email"
           placeholder="Enter Your Email"
           className="w-full border border-gray-300 rounded px-3 py-2"
           />
          </div>
           {/* Phone Number */}
          <div className="flex-1">
             <label className="block mb-1 font-medium text-left">Phone No. : </label>
           <input 
           type="number"
           placeholder="Enter Your Phone No."
           className="w-full border border-gray-300 rounded px-3 py-2"
           />
          </div>
            {/* Education Qualification */}
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Education Qualification : </label>
           <select  className="w-full border border-gray-300 rounded px-3 py-2">
           <option value="">-- Select Qualification --</option>
           <option value="Matric">Matric</option>
           <option value="Intermediate">Intermediate</option>
           <option value="Bachelor">Bachelor</option>
           <option value="Master">Master</option>
           <option value="PhD">PhD</option>
           <option value="M.phil">M.phil</option>
           <option value="Other">Other</option>
           </select>
          </div>
      </div>
         <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
           <label className="block mb-1 font-medium text-left">Residential Addres of the Parent/Guardian: </label>
           <textarea
           placeholder="Please type tour address here..."
           className="w-full  border border-gray-300 rounded px-3 py-2"
           > 
           </textarea>
          </div>
         </div>
         <div className="mt-8 text-left">
         <button
           type="submit"
           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Submit Form
        </button>
   </div>
        </form>
        </div> 
    </div>
  );
};

export default AdmissionForm;
