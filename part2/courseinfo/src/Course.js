const Course = (props) => (
  <>
    <Header name={props.coursename} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </>
);

const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((x) => (
    <Part key={x.id} part={x}>
      {" "}
    </Part>
  ));
};

const Total = ({ parts }) => (
  <strong>
    Total of {parts.reduce((sum, x) => sum + x.exercises, 0)} exercises
  </strong>
);

export default Course;
