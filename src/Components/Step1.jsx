import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom"

function Form() {
    const {register, formState: {errors}, handleSubmit,} = useForm();

    
    
  return (
    <div className="container ">
        <div className='w-4/5 bg-white rounded-lg absolute top-24 left-10 h-102 p-5 
                    md:left-[500px] md:w-1/2 md:top-14 shadow-lg md:shadow-none'>
            <h1 className='font-bold text-2xl my-3 md:text-4xl'>Personal Info</h1>
            <p className='mb-4'>Please provide your name, email address, and phone number</p>
            <form onChange={handleSubmit()}>
             
                <div className='flex-row'>
                    <label htmlFor='name'>Name</label>  <br />
                    <input
                        className='border border-5 rounded-md w-60 p-1 mb-4 mt-1 md:w-3/4'
                        type='text' name='name' id='name' placeholder='e.g Stephen King'
                        {...register("name", {required: true})}
                    />
                    <div className='font-light text-right md:mr-40 text-sm text-red-600'>
                        {errors.name?.type === "required" && "This field is required"}
                    </div>
                </div>
                
                <div className='flex-row'>
                    <label htmlFor='email'>Email Address</label> <br />
                    <input 
                        className='border border-5 rounded-md w-60 p-1 mb-4 mt-1 md:w-3/4'
                        type='email' name='email' id='email' placeholder='e.g Stephenking@lorem.com' 
                        {...register("email", {
                            required: true, 
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                    />
                    <div className='font-light text-right md:mr-40 text-sm text-red-600'>
                       {errors.email?.type === "pattern" && "The email is invalid"}
                    </div>
                </div>

                
                <div className='flex-row'>
                     
                    <label htmlFor='phone'>Phone Number</label> <br />
                    <input
                     className='border border-5 rounded-md w-60 p-1 mb-4 mt-1 md:w-3/4' 
                     type="tel" name='phone' id='phone' placeholder='e.g +1 234 567 890'
                     {...register("number", {minLength: 12, maxLength: 12})} 
                     />
                    <div className='font-light text-right md:mr-40 text-sm text-red-600'>
                       {errors.number?.type === "minLength" && "Entered number is less than 12 digit"}
                       {errors.number?.type === "maxLength" && "Entered number is more than 12 digit"}
                    </div>
                </div>
           
                 
                  <NavLink 
                        to='/Step2'
                        className='btn rounded-md p-2 absolute left-[210px] top-[490px] 
                                    hover:opacity-50 md:left-[430px] md:top-[480px]'
                    >
                        Next Step
                  </NavLink>   
                
            </form>    

        </div>

        
    </div>
  )
}

export default Form
