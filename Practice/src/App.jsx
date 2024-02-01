import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="tyler" age={29} employStatus={false}></Student>
      <Student name="steven" age={33} employStatus={true}></Student>
      <Student name="bon" age={26} employStatus={true}></Student>
      <Student></Student>
    </>
  )
}

export default App