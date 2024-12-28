import React, { useEffect, useRef, useState } from 'react'

export default function Counter() {
	const [counter, setCounter] = useState(0)
	const [pause, setPause] = useState(0)
	let intervalRef = useRef(null)
	
	useEffect(() => {
	  startCounter()
	  return () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
	  };
	}, [])
	
	const startCounter = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			console.log('interval is running')
			setCounter((prev) => prev + 1)
		}, 1000);

		setPause(false)
	}

	const stopCounter = () => {
		setPause(true)
		if (intervalRef.current) clearInterval(intervalRef.current);
	}

	const resetCounter = () => {
		clearInterval(intervalRef.current)
		setCounter((prev) => 0)
		setPause(true)
	}
  return (
	<div className="counter-container">
	<h1 className="counter-display">{counter}</h1>
	<div className="counter-controls">
	  <button className="start-button" onClick={() => pause ? startCounter() : stopCounter()}>{pause ? ( counter == 0 ? 'Start': 'Resume') : 'Pause'}</button>
	  <button className="clear-button" onClick={() => resetCounter()}>Clear</button>
	</div>
  </div>
  )
}
