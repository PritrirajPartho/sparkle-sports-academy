import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <h1 className='mb-12'>Assignment 12 is very hard. so be careful</h1>
        <button className="btn btn-outline btn-info">Assignment-12 for your life</button>
        <button className="btn btn-outline btn-success">Success</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        <button className="btn btn-outline btn-error">Error</button>
   </div>
  )
}

export default App
