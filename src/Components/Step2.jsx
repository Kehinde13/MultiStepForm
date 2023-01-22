import React, { useState } from 'react'
import arcadeIcon from '../images/icon-arcade.svg'
import advancedIcon from '../images/icon-advanced.svg'
import proIcon from '../images/icon-pro.svg'
import { NavLink } from "react-router-dom"

function Step2(props) {
  const [arcade, setArcade] = useState(false)
  const [advanced, setAdvanced] = useState(false)
  const [pro, setPro] = useState(false)

  function chooseArcade() {
    setArcade(!arcade)
    setAdvanced(false)
    setPro(false)
  }

  function chooseAdvanced() {
    setAdvanced(!advanced)
    setPro(false)
    setArcade(false)
  }

  function choosePro() {
    setPro(!pro)
    setArcade(false)
    setAdvanced(false) 
  }

  return (
    <div className="container">
        <div className='w-4/5 bg-white rounded-lg absolute top-20 left-10 h-102 p-5 
                        md:left-[500px] md:w-1/2 md:top-14 shadow-lg md:shadow-none'>
    
          <h1 className='font-bold text-2xl my-3 md:text-4xl'>Select your plan</h1>    
          <p className='mb-4'>You have the option of monthly or yearly billing</p>

          <div className='md:flex md:space-x-3'>
              <div
                onClick={chooseArcade}  
                className={`flex space-x-4 p-3 border-2 mb-3 rounded-md cursor-pointer md:w-1/4 md:h-[200px] md:block option 
                ${arcade ? "selectedOption" : ""}`}
              >
                  <img src={arcadeIcon} alt="" className='md:w-12 md:mt-2 md:ml-3'/>
                <div>
                  <h1 className='font-bold md:mt-12'>Arcade</h1>
                  { props.isToggled ?
                  <><p>$90/yr</p> <p className='font-semibold'>2 months free</p> </>  :
                  <p>$9/mo</p> }
                </div>
              </div >

              <div
                onClick={chooseAdvanced}  
                className={`flex space-x-4 p-3 border-2 mb-3 rounded-md cursor-pointer md:w-1/4 md:h-[200px] md:block option 
                ${advanced ? "selectedOption" : ""}`}
              >
                  <img src={advancedIcon} alt="" className= 'md:w-12 md:mt-2 md:ml-3'/>
              <div> 
                  <h1 className='font-bold md:mt-12'>Advanced</h1>
                  { props.isToggled ?
                  <><p>$120/yr</p> <p className='font-semibold'>2 months free</p> </>  :
                  <p>$12/mo</p> }
                </div>
              </div>

              <div
                onClick={choosePro}  
                className={`flex space-x-4 p-3 border-2 mb-3 rounded-md cursor-pointer md:w-1/4 md:h-[200px] md:block option 
                ${pro ? "selectedOption" : ""}`}
              >
                  <img src={proIcon} alt="" className='md:w-12 md:mt-2 md:ml-3'/>
              <div>
                  <h1 className='font-bold md:mt-12'>Pro</h1>
                  { props.isToggled ?
                  <><p>$150/yr</p> <p className='font-semibold'>2 months free</p> </>  :
                  <p>$15/mo</p> }
                </div>
              </div>
          </div>

          <div className='bg-sky-100 p-3 w-[100%] md:w-3/4 flex justify-between mx-auto md:mx-3 md:mt-9 rounded-md'>
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

        <div className='bottom-2 flex left-7 justify-between w-80 md:bottom-20 
                    absolute md:w-[500px] md:left-[510px]'>
            <NavLink to="/MultiStepForm"
               className='font-bold text-xl text-blue-300 hover:text-blue-900 mt-1'>
              Go Back
            </NavLink>

            <NavLink to='/Step3'
              className='btn rounded-md py-2 px-4 hover:opacity-50'>
              Next Step
            </NavLink>
        </div>

    </div>

  )
}

export default Step2