import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage/Homepage"
import SignIn from "./Signin"
import SignUp from "./Signup";


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* <Route path="/" element={<Herosection />} /> */}
      </Routes>
    </>
  );
}

export default App
