import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <h1>Calculator</h1>
      <div className="card">
        <label>
          First Number
          <input
            value={firstNumber}
            onChange={e => setFirstNumber(Number(e.target.value))} />
        </label>
        <label>
          Second Number
          <input
            value={secondNumber}
            onChange={e => setSecondNumber(Number(e.target.value))}
          />
        </label>
        <span>Result: {result}</span>
      </div>
      <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
      <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
      <button onClick={() => setResult(firstNumber * secondNumber)}>*</button>
      <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
    </>
  )
}

export default App