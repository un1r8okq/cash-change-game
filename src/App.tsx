import { useState } from 'react'
import './App.css'

const lastResultTypes = {
  correct: 'correct',
  incorrect: 'incorrect',
  unknown: 'unknown',
} as const;

type EnumLike<T> = T[keyof T];
type LastResultType = EnumLike<typeof lastResultTypes>;

function App() {
  const [score, setScore] = useState(0)
  const [lastResultType, setLastResultType] = useState<LastResultType>(lastResultTypes.unknown)
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
    if (changeGiven === changeDue) {
      setLastResultType(lastResultTypes.correct);
      setScore(score + 10)
    } else {
      setLastResultType(lastResultTypes.incorrect);
      setScore(score - 5)
    }

    const maxChangeDue = 10;
    setChangeDue(Math.floor(Math.random() * maxChangeDue + 1));
    setChangeGiven(0);
    setTimeout(() => setLastResultType(lastResultTypes.unknown), 1000);
  };

  return (
    <div className={`app ${lastResultType}`}>
      <div className='display'>
        <div className='score'>🏆 Score: {score}</div>
        <div className='amount'>
          <div className='dueLabel'>Due</div>
          <div className='dueNumber'>${changeDue}</div>
        </div>
        <div className='amount'>
          <div className='givingLabel'>Giving</div>
          <div className='givingNumber'>${changeGiven}</div>
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
    </div>
  )
}

export default App
