import React from 'react'
import './App.css'
import Die from './assets/components/die'
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: true
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} />
  ))

  return (<main>
    <div className="dice-container">
      {diceElements}
    </div>
    <button className="roll-dice" onClick={rollDice}>Roll</button>
  </main>)
}

export default App