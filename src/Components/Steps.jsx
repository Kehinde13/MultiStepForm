import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function Steps() {
    const location = useLocation()

  return (
    <div className='mt-[-10px]'>
         <div className='ml-20 md:ml-8 md:mt-20 absolute top-5 '>
                  <ul className='flex md:flex-col md:space-y-10 md:space-x-0 space-x-10 font-bold'>
                    <li className='flex space-x-5'>
                        <div className={`rounded-full border w-7 text-center text-white self-center 
                            ${location.pathname === "/" ? "bg-sky-300 text-blue-800 border-none" : "text-white"}`}>
                            1
                        </div>
                        <div className='hidden md:block steps'>
                          <p className='font-thin text-white'>STEP 1</p>
                          <p className=' text-white'>YOUR INFO</p>
                        </div>
                    </li>
                    <li className='flex space-x-5'>
                        <div className={`rounded-full border w-7 text-center text-white self-center 
                            ${location.pathname === "/Step2" ? "bg-sky-300 text-blue-800 border-none" : "text-white"}`}>
                            2
                        </div>
                        <div className='hidden md:block steps'>
                          <p className='font-thin text-white'>STEP 2</p>
                          <p className=' text-white'>SELECT PLANS</p>
                        </div>
                    </li>
                    <li className='flex space-x-5'>
                        <div className={`rounded-full border w-7 text-center text-white self-center 
                            ${location.pathname === "/Step3" ? "bg-sky-300 text-blue-800 border-none" : "text-white"}`}>
                            3
                        </div>
                        <div className='hidden md:block steps'>
                          <p className='font-thin text-white'>STEP 3</p>
                          <p className=' text-white'>ADD-ONS</p>
                        </div>
                    </li>
                    <li className='flex space-x-5'>
                        <div className={`rounded-full border w-7 text-center text-white self-center 
                            ${location.pathname === "/Step4" ? "bg-sky-300 text-blue-800 border-none" : "text-white"}`}>
                            4
                        </div>
                        <div className='hidden md:block steps'>
                          <p className='font-thin text-white'>STEP 4</p>
                          <p className=' text-white'>SUMMARY</p>
                        </div>
                    </li>
                  </ul>
              </div>

              <div>
                <Outlet />
              </div>
    </div>
    
  )
}

export default Steps