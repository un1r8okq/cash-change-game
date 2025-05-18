import { useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')
  const [changeDue, setChangeDue] = useState(12)
  const [changeGiven, setChangeGiven] = useState(0)

  const handleMouseDown = (event: React.MouseEvent, amount: number) => {
    event.preventDefault();

    if (event.button === 0) {
      // Left click, increment change
      setChangeGiven(changeGiven + amount);
    } else {
      // Right click, decrement change
      if (changeGiven - amount >= 0) {
        setChangeGiven(changeGiven - amount);
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
      <div className='display'>
        <h1>{msg}</h1>
        <div className='amount'>
          <div className='amountLabel'>Due</div>
          <div className='amountNumber'>${changeDue}</div>
        </div>
        <div className='amount'>
          <div className='amountLabel'>Giving</div>
          <div className='amountNumber'>${changeGiven}</div>
        </div>
      </div>
      <div className='buttons'>
        <div className='button-group'>
          {
            [1, 2, 5].map(amount => (
              <button
                title='Left click to add, right click to remove'
                onMouseDown={(e) => handleMouseDown(e, amount)}
                onContextMenu={(e) => e.preventDefault()}
                key={amount}
              >
                ${amount}
              </button>
            ))
          }
        </div>
        <div className='button-group'>
          <button
            onClick={checkChange}
            disabled={changeGiven === 0}
          >
            Give change
          </button>
        </div>
      </div>
    </>
  )
}

export default App
