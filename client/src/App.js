import React from 'react'
import './app.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Auth from './components/Auth/Auth.jsx'


const App=()=>{
    
    return(
        <>
           <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home  />}  />
                <Route path="/auth" exact Component={Auth}  />
            
            </Routes>
            </BrowserRouter>
        </>
        
    )
}
export default App;