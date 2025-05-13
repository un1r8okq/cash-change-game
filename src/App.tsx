import { useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')
  const [changeDue, setChangeDue] = useState(12)
  const [changeGiven, setChangeGiven] = useState(0)

  const checkChange = () => {
    setMsg(changeGiven === changeDue ? 'Correct!' : 'Incorrect.');

    const maxChangeDue = 10;
    setChangeDue(Math.floor(Math.random() * maxChangeDue));
    setChangeGiven(0);
  };

  return (
    <>
      <h1>{msg}</h1>
      <p className='amount'>
        <span className='amountLabel'>Change due</span>
        <span className='amountNumber'>${changeDue}</span>
      </p>
      <p className='amount'>
        <span className='amountLabel'>Change to give</span>
        <span className='amountNumber'>${changeGiven}</span>
      </p>
      <div>
        <button onClick={() => setChangeGiven(changeGiven + 1)}>$1</button>
      </div>
      <div>
        <button
          onClick={checkChange}
          disabled={changeGiven === 0}
        >
          Give change
        </button>
      </div>
    </>
  )
}

export default App
