import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
)
const StatisticLine = props => <tr><td>{props.text} {props.value}</td></tr>

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / total).toFixed(1)
  const positive = String((( (total - props.bad - props.neutral) / total ) * 100).toFixed(1)) + " %"

  if (total === 0) {
    return (
      <p>No feedback given </p>
    )
  }

  return (
  <table>
    <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>     
    </tbody>
  </table> )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback </h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h2> statistics </h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>)
}

export default App