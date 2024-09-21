import { useState } from 'react'
import { BrowserRouter,Routes,route, useNavigate } from 'react-router-dom'
import './App.css'
import { Landing } from './componets/landing'
import { Dashbord} from './componets/dashbord'

function App() {
  
  return(
    <div>
   

    <BrowserRouter>
      <AppBar />
      <routs>
        <route path="/dashbord" element={<Dashbord/>}/>
        <route path="/landing" element={<Landing/>}/>
      </routs>
    
    </BrowserRouter>
    </div>
    
  )
  function AppBar(){
    const navigate=useNavigate();
    return (
    <div>
      <div >
    <button onClick={()=>{
      navigate('/landing')
    }}>landing page</button>
    <button onClick={()=>{
      navigate('/dashbord')
    }}>dashbord page</button>
   </div>
    </div>
 
    )
  }

    
}

export default App
