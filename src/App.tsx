import { useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')
  const [changeDue, setChangeDue] = useState(12)
  const [changeGiven, setChangeGiven] = useState(0)

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();

    if (event.button === 0) {
      // Left click, increment change
      setChangeGiven(changeGiven + 1);
    } else {
      // Right click, decrement change
      if (changeGiven > 0) {
        setChangeGiven(changeGiven - 1);
      }
    }
  }

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
        <button
          title='Left click to add, right click to remove'
          onMouseDown={handleMouseDown}
          onContextMenu={(e) => e.preventDefault()}
        >
          $1
        </button>
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
