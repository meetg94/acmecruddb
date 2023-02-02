import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RegistrationForm({ name, setName, age, setAge, department, setDepartment, handleSubmit }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="employee-form-card">
        <CardContent>        
        <Typography variant="body2" color="black" className='employee-form-desc'>
          Acme Corp. EmployeesDB App has been built on React, Nodejs, Express and MongoDB.
          You can fill the form in order to add an employee.
          You can click on delete icon to delete an employee.
          You can click on edit icon to edit the info of an employee.
        </Typography>
      </CardContent>
      <CardContent>
        <form className='employee-form-input' onSubmit={handleSubmit}>
          <label>Name: <input
                          type='text'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder='Employee Name'
                          />
          </label>
          <div>Age: <input 
                      type='text'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder='Employee Age'
                      />
          </div>
          <div>Department: <input
                              type='text'
                              value={department}
                              onChange={(e) => setDepartment(e.target.value)}
                              placeholder='Department'
                              />
          </div>
        </form>
      </CardContent>
        <Button size="small" className='submit-btn' onClick={handleSubmit}>Submit</Button>
    </Card>
  );
}