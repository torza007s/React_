import Login from "./component/Login.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard2 from "./component/Dashboard2.jsx";
import Notfound from "./component/Notfound.jsx";
import Acceptance from "./component/Acceptance.jsx";
import Login2 from "./component/Login2.jsx";

import MainDashboard from "./component/MainDashboard.jsx";


function App() {
  

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Profile' element={<MainDashboard />} />
      </Routes>

    </div>
  )
}

export default App
