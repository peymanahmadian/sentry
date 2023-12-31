import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ErrorBoundary } from '@sentry/react';
function App() {
  const [count, setCount] = useState(0)
  const [arr,setArr]=useState([1,2])
  return (
    <ErrorBoundary
      fallback={<div>error ocuured</div>}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => (count / Infinity) - 3)}>
          count is {count}
        </button>
        
        <button onClick={()=>setArr(arr.splice(0,1))}>
          convert to string
        </button>
        {
          arr.map(i=><div key={i}>arr is {i}</div>)
        }
        <p>
          <div>{arr[1].toString()}</div>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ErrorBoundary>
  )
}

export default App
