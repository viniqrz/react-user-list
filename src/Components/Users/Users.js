import './Users.css';
import Card from '../UI/Card.js';
import UsersList from './UsersList.js';

const Users = function(props) {
  return (
    <Card>
      <UsersList users={props.items} />
    </Card>
  )
}

export default Users;