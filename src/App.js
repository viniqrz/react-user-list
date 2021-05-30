import { useState } from 'react';
import './App.css';
import NewUser from './Components/NewUser/NewUser';
import Users from './Components/Users/Users.js';

const DUMMY_USERS = [
  {key: Math.random().toString(), name: 'Max', age: 31},
  {key: Math.random().toString(), name: 'Justino', age: 23},
  {key: Math.random().toString(), name: 'Alice', age: 28},
  {key: Math.random().toString(), name: 'John', age: 35},
]

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = function(newUser) {
    setUsers([newUser, ...users]);
  }

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users items={users}/>
    </div>
  );
}

export default App;
