import { useState } from 'react';
import Modal from '../UI/Modal';
import './UserForm.css';

const UserForm = function(props) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(''); 
  const [isValid, setIsValid] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  const usernameInputHandler = function(e) {
    setUsername(e.target.value);
  }

  const ageInputHandler = function(e) {
    setAge(e.target.value);
  }

  const closeModalHandler = function(e) {
    e.preventDefault();
    setIsValid(true);
  }

  const submitHandler = function(e) {
    e.preventDefault();

    if (age.trim() === '' || username.trim() === '') {
      setIsValid(false);
      setErrMessage('Please enter a valid name and age.');
      return;
    } 

    if (age < 1) {
      setIsValid(false);
      setErrMessage('Please enter a valid age.');
      return;
    }

    props.onSaveUser({
      key: Math.random().toString(),
      name: username,
      age
    })

    setIsValid(true);
    setUsername('');
    setAge('');
  }

  return (
    <div>
      {!isValid ? 
      <Modal message={errMessage} onCloseModal={closeModalHandler} /> : ''}
      <form className='new-user-form'>
        <label>Username</label>
        <input name='username' type='text' onChange={usernameInputHandler} value={username}></input>
        <label>Age (Years)</label>
        <input name='age' type='number' onChange={ageInputHandler} value={age}></input>
        <button 
          type='submit' 
          onClick={submitHandler}
          style={{backgroundColor: !isValid ? 'tomato' : 'blueviolet'}}
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default UserForm;