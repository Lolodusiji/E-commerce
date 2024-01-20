import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage/Homepage"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/" element={<Herosection />} /> */}
      </Routes>
    </>
  );
}

export default App
