import { useState } from 'react'
import Timer from './app/features/Timer/Timer'
import TimerSettings from './app/components/Timer/TimerSettings/TimerSettings'
import ToDo from './app/features/ToDo/ToDo'

import './App.scss'

function App() {

  return (
    <div className='app'>
      <TimerSettings/>
      <Timer/>
      <ToDo/>
    </div>
  )
}

export default App
