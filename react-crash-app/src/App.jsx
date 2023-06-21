import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count5, setCount5] = useState(0)

  return (
      <>
      <h1>Vite + React</h1>
      <h2>Learning the React Flow</h2>
      <p>State, Event and Render</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount5((count5) => count5 + 5)}>
          Add 5
        </button>
        <p>Counter is  is {count5}</p>
      </div>
      </>
  )
}

export default App
