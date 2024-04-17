import { useState, useEffect } from 'react'

export const Counter = ({ initialCount = 0 }) => {
    const [ count, setCount ] = useState(initialCount)
    // const [ isStartClicked, setIsStartClicked ] = useState({start:0, stop:1})
    const [ intervalID, setIntervalID ] = useState(0)

    const onIncrement = () => {
        setCount(prev => prev + 1)
    }



    const onStartClicked = () => {setIntervalID(setTimeout(() => {
                onIncrement()
            }, 1000))}

    const onStopClicked = () => clearInterval(intervalID)


    useEffect(() => {
        if (count !== 0)
            {setIntervalID(setTimeout(() => {
                onIncrement()
        }, 1000))}
    },[count])

    return <div>
        <button onClick={onStartClicked}>START</button>
        <h1>
            {count}
        </h1>
        <button onClick={onStopClicked}>STOP</button>
    </div>
}