const Course = (props) => 
< >
  <Header name={props.coursename} />
  <Content parts={props.course.parts} />
  <Total parts={props.course.parts} />
</>

const Header = ({name}) => 
<h1>
  {name}
</h1>
  

const Part = ({part}) => 
  <p>
    {part.name} {part.exercises}
  </p>



const Content = ({parts}) => {

  return (  
    parts.map(x => <Part key={x.id} part={x}> </Part>)
  )
}

const Total = ({parts}) => <strong> Total of {parts.reduce((sum, x) => sum + x.exercises, 0)} exercises </strong>  


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(x => <Course key={x.id} course={x}> </Course>)}
    </div>
  )
}

export default App