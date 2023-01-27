import React, {useState} from 'react'
import { NavLink } from "react-router-dom"

function Step3(props) {
   const[addOns, setAddOns] = useState({
     onlineServices: false,
     customize: false,
     largerStorage: false
   })

   function handleCheck(event) {
    const {name, checked} = event.target
    setAddOns(prevAddOns => {
        return {
            ...prevAddOns,
            [name] : checked
        }
    })
   }

  return (
    <div className='container'>
      <div className='w-[90%] bg-white rounded-lg absolute top-24 left-5 h-102 p-5 
                      md:left-[500px] md:w-1/2 md:top-14 shadow-lg md:shadow-none'>
          <h1 className='font-bold text-2xl my-3 md:text-4xl'>Pick add-ons</h1>
          <p className='mb-4'>Add-ons help enhance your gaming experience</p>

          <form >
              <div className={`flex space-x-3 border-2 p-2 mb-3 rounded-md cursor-pointer relative
                              md:w-[500px] md:space-x-10 md:p-4 ${addOns.onlineServices ? "selectedOption" : ""} `}>
                  <input 
                      className='md:ml-4'
                      type="checkbox" 
                      name="onlineServices" 
                      id="onlineServices" 
                      onChange={handleCheck}
                      checked={addOns.onlineServices}
                  />
              <label 
                className='flex text-sm space-x-12 md:space-x-36'
                htmlFor="onlineServices">
                  <div>
                    <h1 className='font-bold'>Online Services</h1>
                    <p>Access to multiplayer games</p>  
                  </div>
                  <div>
                  {props.isToggled ? "+$10/yr" : "+$1/mo"}
                  </div>
              </label>
              </div>

              <div className={`flex space-x-3 border-2 p-2 mb-3 rounded-md cursor-pointer relative
                              md:w-[500px] md:space-x-10 md:p-4 ${addOns.largerStorage ? "selectedOption" : ""} `}>
                  <input
                      className='md:ml-4' 
                      type="checkbox" 
                      name="largerStorage" 
                      id="largerStorage" 
                      onChange={handleCheck}
                      checked={addOns.largerStorage}
                  />
              <label 
                className='flex text-sm space-x-24 md:space-x-48'
                htmlFor="largerStorage">
                  <div>
                    <h1 className='font-bold'>Larger Storage</h1>
                    <p>Extra 1TB of storage</p>  
                  </div>
                  <div>
                  {props.isToggled ? "+$20/yr" : "+$2/mo"}
                  </div>
              </label>
              </div>

              <div className={`flex space-x-3 border-2 p-2 mb-3 rounded-md cursor-pointer relative
                              md:w-[500px] md:space-x-10 md:p-4 ${addOns.customize ? "selectedOption" : ""} `}>
                  <input 
                      className='md:ml-4'
                      type="checkbox" 
                      name="customize" 
                      id="customize"
                      onChange={handleCheck}
                      checked={addOns.customize} 
                  />
              <label 
                className='flex text-sm space-x-10 md:space-x-32'
                htmlFor="customize">
                  <div>
                    <h1 className='font-bold'>Customizable Profile</h1>
                    <p>Custom theme on your profile</p>  
                  </div>
                  <div>
                    {props.isToggled ? "+$20/yr" : "+$2/mo"}
                  </div>
              </label>
              </div>
              
          </form>

          <div className='bg-sky-100 p-3 w-[100%] md:w-3/4 flex justify-between  
                           md:mx-3 md:mt-9 rounded-md'>
            <h1 className='mr-3'>Monthly</h1>
            <label className='switch'>
              <input type="checkbox" 
                checked={props.isToggled}
                onChange={props.onToggle}
              />
              <span className='slider' />
            </label>
            <h1 className='ml-3'>Yearly</h1>
        </div>

      </div>

      <div className='bottom-2 mx-5 flex justify-between w-[90%] md:bottom-16 absolute md:w-[500px] md:left-[500px]'>
            <NavLink to="/Step2"
               className='font-bold text-xl text-blue-300 hover:text-blue-900 mt-1'>
              Go Back
            </NavLink>

            <NavLink to='/Step4'
              className='btn rounded-md py-2 px-4 hover:opacity-50'>
              Next Step
            </NavLink>
        </div>

    </div>
    
  )
}

export default Step3