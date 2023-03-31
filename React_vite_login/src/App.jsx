import Login from "./component/Login.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard2 from "./component/Dashboard2.jsx";
import Notfound from "./component/Notfound.jsx";

function App() {
  

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Profile/*' element={<Dashboard2 />} />
      </Routes>

    </div>
  )
}

export default App
