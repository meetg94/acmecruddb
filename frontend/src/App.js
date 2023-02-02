import { useState, useEffect } from 'react'

import employeeService from './Services/employees'
import RegistrationForm from './Components/RegistrationForm'
import EmployeeTable from './Components/EmployeeTable'

function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [department, setDepartment] = useState("")

  useEffect(() => {
    employeeService
      .getAll()
      .then(initialEmployees => {
        setData(initialEmployees)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const employeeObject = {
      name: name,
      age: age,
      department: department
    }

    employeeService
      .create(employeeObject)
      .then(returnedEmployee => {
        setData(data.concat(returnedEmployee))
        setName("")
        setAge("")
        setDepartment("")
      })
  }

  return (
    <div>
      <div className="heading">
        <h3>Acme Corp. Employees DB</h3>
        <div className='main-container'>
          <RegistrationForm 
            name={name}
            setName={setName} 
            age={age} 
            setAge={setAge} 
            department={department}
            setDepartment={setDepartment}
            handleSubmit={handleSubmit}
          />
          <EmployeeTable 
              data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
