import { NavLink } from "react-router-dom"

function Step4(props) {
  return (
    <div className='container'>
        <div className='w-[90%] bg-white rounded-lg absolute top-24 left-5 h-102 p-5 
                    md:left-[500px] md:w-1/2 md:top-14 shadow-lg md:shadow-none'>

            <h1 className='font-bold text-2xl my-3 md:text-4xl'>Finishing up</h1>
            <p className='mb-4'>Double-Check if everything looks Ok before confirming</p>

            <div className='bg-sky-50 p-3 text-sm md:text-base md:w-[500px]'>
                <div className='flex justify-between my-3'>
                    <div>
                    <b>{props.isToggled ? "Arcade (Yearly)" : "Arcade (Monthly)"}</b> <br />
                    <a href="/Step2">change</a> 
                    </div>
                    <p className="font-semibold">{props.isToggled ? "+$90/yr" :"+$9/mo"}</p>
                </div>
                <hr /> 

                <div className='flex justify-between my-3'>
                    <p>Online Services</p>
                    <p className='font-medium'>{props.isToggled ? "+$10/yr" :"+$1/mo"}</p>
                </div> 

                <div className='flex justify-between my-3'>
                    <p>Larger storage</p>
                    <p className='font-medium'>{props.isToggled ? "+$20/yr" :"+$2/mo"}</p>
                </div> 

            </div>
            
            <div className='flex my-3 justify-between md:w-[500px]'>
                <p className='text-sm'>{props.isToggled ? "Total (per year)" : "Total (per month)"}</p>
                <p className='font-extrabold'>{props.isToggled ? "+$120/yr" : "+$12/mo"}</p>
            </div>

        </div>

        <div
          className='bottom-2 mx-5 flex justify-between w-[90%] md:bottom-28 
                    absolute md:w-[500px] md:left-[500px]'>
            <NavLink to="/Step3"
               className='font-bold text-xl text-blue-300 hover:text-blue-900 mt-1'>
              Go Back
            </NavLink>

            <NavLink to='/Thanks'
              className='btn rounded-md py-2 px-4 hover:opacity-50'>
               Confirm
            </NavLink>
        </div>

    </div>
   
  )
}

export default Step4