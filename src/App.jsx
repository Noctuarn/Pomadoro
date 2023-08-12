import { useState } from 'react'
import Timer from './app/features/Timer/Timer'
import TimerSettings from './app/components/Timer/TimerSettings/TimerSettings'

import './App.scss'

function App() {

  return (
    <div className='app'>
      <TimerSettings/>
      <Timer/>
    </div>
  )
}

export default App
