import React, {useState} from 'react';
import bgDesktop from './images/bg-sidebar-desktop.svg';
import bgMobile from './images/bg-sidebar-mobile.svg';
import Steps from './Components/Steps';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import ThankYou from './Components/ThankYou';
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
  
  


function App() {
  const [isToggled, setIsToggled] = useState(false)

  function onToggle() {
    setIsToggled(!isToggled)
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Steps /> } >
          <Route path='/MultiStepForm' element={ <Step1 /> } />

          <Route path='Step2' element={ <Step2 
          isToggled={isToggled}
          onToggle={onToggle}
          />} />
          
          <Route path='Step3' element={ <Step3 
          isToggled={isToggled}
          onToggle={onToggle}
          /> } />

          <Route path='Step4' element={ <Step4 
          isToggled={isToggled}
          onToggle={onToggle}
          /> } />

        <Route path='Thanks' element={<ThankYou />} />
    </Route>
    )
  )


  return (
    
       <div className="App md:ml-24 md:mt-10">
          <div className='form bg-sky-50 md:bg-white'>
              
              <picture className='sidebar'>
                <source media='(min-width:769px)'
                 srcSet={bgDesktop}/>

                 <img src={bgMobile} alt='sidebar'/>
                  
              </picture>
            
            <RouterProvider router={router} />
            
          </div>
          
      </div>
    
  );
}

export default App;
