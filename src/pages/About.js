import React from 'react'
import HeroSection from '../../src/assets/HeroSection.png'

const Aboutpages = () => {
    return (
       <div>
         <section>
               <div className='relative w-full h-[660px] bg-cover bg-center '
                style={{backgroundImage: `url(${HeroSection})`}}></div>

                <div className='absolute inset-0 bg-black/70'></div>

                <div className='absolute inset-0 z-10 flex items-center justify-start '>
                    <div className='mx-20 mb-10'>
                              <h1 className='text-left font-bold text-4xl mx-4 text-white mt-4 '>
                        About
                    </h1>
                    <p className='text-left font-bold text-4xl mx-4 text-white mt-4 '>
                        University of Central Punjab
                    </p>
                    </div>                 
                </div>
         </section>
       </div>
    );
};

export default Aboutpages