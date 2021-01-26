import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.number}{props.percent}</td>
    </tr>
  )
}

const Button = (props) => <button onClick={props.action}>{props.text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good+neutral+bad;

  if(total === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button action={() => setGood(good+1)} text="good"/>
        <Button action={() => setNeutral(neutral+1)} text="neutral"/>
        <Button action={() => setBad(bad+1)} text="bad"/>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics text="good" number={good} />
          <Statistics text="neutral" number={neutral} />
          <Statistics text="bad" number={bad} />
          <Statistics text="all" number={total} />
          <Statistics text="average" number={(good-bad)/total} />
          <Statistics text="positive" number={good/total*100} percent="%" />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)