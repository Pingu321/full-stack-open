import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
)
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total / 3
  const positive = ( (total - props.bad) / total ) / 100

  return (
  <>
    <p>good {props.good} </p>
    <p>neutral {props.neutral} </p>
    <p>bad {props.bad} </p>
    <p>all {total}</p>
    <p>average {average} </p>
    <p>positive {positive} </p>
  </> )
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
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <h2> statistics </h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>)
}

export default App