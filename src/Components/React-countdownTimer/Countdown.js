import { useState } from 'react'
import './Countdown.css'
import FlipCountdown from '@rumess/react-flip-countdown'

const Countdown = () => {
    const countToDate = new Date ();
    countToDate.setHours(countToDate.getHours() + 1)
    console.log(countToDate)
    

    const [reset, setReset] = useState(null)

    const handleReset = () => {
        setReset(countToDate)
    }

    const handleSpeech = () => {
        const text = 'Time Up'
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
    }
  return (
    <div className='countdown-timer'>
        <FlipCountdown
            hideYear
            hideMonth
            hideDay
            hourTitle='Hours'
            minuteTitle='Minutes'
            secondTitle='Seconds'
            endAtZero
            endAt={countToDate}
            onTimeUp={handleSpeech}
        />
        <div className='buttons'>
            <button value={reset} onClick={handleReset}>Reset</button>


        </div>
    </div>
  )
}

export default Countdown