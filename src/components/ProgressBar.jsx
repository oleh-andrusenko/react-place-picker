import React, { useState, useEffect } from "react"


function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL")
      setRemainingTime((prevTime) => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return <progress id='progress' value={remainingTime} max={timer} />
}

export default ProgressBar
