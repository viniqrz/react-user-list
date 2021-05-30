import './NewUser.css';
import UserForm from './UserForm.js';
import Card from './../UI/Card.js';

const NewUser = function(props) {
  // const saveUser = function() {

  // }

  return (
    <Card>
      <UserForm onSaveUser={props.onAddUser}/>
    </Card>
  )
}

export default NewUser;