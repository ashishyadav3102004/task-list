import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskDashboard from './TaskDashboard/TaskDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <TaskDashboard/>

    </>
  )
}

export default App
