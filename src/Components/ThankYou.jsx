import React from 'react'
import ThanksImg from '../images/icon-thank-you.svg'

function ThankYou() {
  return (
    <div className='w-[90%] bg-white rounded-lg absolute top-24 left-5 h-102 p-5 
                    md:left-[500px] md:w-1/2 md:top-14 text-center'>

        <div className='mt-10 md:mt-20 md:w-[500px]'>
            <img 
            src={ThanksImg} alt="thanks"
            className='w-[50px] mx-auto mb-4'
            />
            <h1 className='font-bold text-2xl my-3 md:text-4xl'>Thank You</h1>
            
            <p className='p-2 m-4'>
                Thanks for confirming your subscription! We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
            
        </div>
        
    </div>
  )
}

export default ThankYou