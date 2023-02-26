
import BeforeTheEnd from './Component/Before The End/BeforeTheEnd';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

import Landing from './Component/Landing Page/landingpage';
import Family from './Component/The Start/Family';
import Children from './Component/The Start/Children';
import Finances from './Component/The Start/Finances';
import Health from './Component/The Start/Health';
import Religion from './Component/The Start/Religion';
import Love from './Component/The Start/Love';
import TheStart from './Component/The Start';
import TheMiddle from './Component/The Middle/TheMiddle';
import Enter from './Component/Enter/enter';

function App() {
  return (
   <div className='h-screen bg-black '>

 <Router>
   <Routes>
    <Route path='/' element={<Enter />}/>
    <Route path='/home' element={<Landing />}/>
    <Route path='/themiddle' element={<TheMiddle />}/>
    <Route path='/thestart' element={<TheStart />}/>
    <Route path='/children' element={<Children />}/>
    <Route path='/family' element={<Family />}/>
    <Route path='/finances' element={<Finances />}/>
    <Route path='/health' element={<Health />}/>
    <Route path='/love' element={<Love />}/>
    <Route path='/religion' element={<Religion />}/>
    <Route path='/beforetheend' element={<BeforeTheEnd/>}/>
   </Routes>
 </Router>
   



    </div>
  );
}

export default App;
