import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Hong Gil Dong1',
  'birthday': '880405',
  'gender': 'male',
  'job': 'college student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Sejong Daewang',
  'birthday': '890405',
  'gender': 'male',
  'job': 'King'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Sunsin Lee',
  'birthday': '900405',
  'gender': 'female',
  'job': 'General'
}]

function App() {
  return (
    <div>
      { customers.map(c=> { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )}) }
    </div>
  );
}

export default App;
