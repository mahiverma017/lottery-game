import Lottery from './Lottery'
import { sum } from './helper'
import './App.css'

function App() {
  let winCondition = (ticket)=> {
    return sum(ticket) == 15;
  }

  return (
    <>
     <Lottery n={5} winCondition={winCondition}></Lottery>

    </>
  )
}

export default App
