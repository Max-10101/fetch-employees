
import './App.css'
import EmployeeCard from './EmployeeCard'
const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  

  return (
    <>
     <EmployeeCard employee={sampleEmployee} />
    </>
  )
}

export default App
