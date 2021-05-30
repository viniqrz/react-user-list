import UserItem from './UserItem';
import './UsersList.css'; 

const UsersList = function(props) {
  return (
    <div>
      {props.users.map(user => (
      <UserItem 
        key={user.key} 
        name={user.name} 
        age={user.age}
      />
      ))}
    </div>
  );
}

export default UsersList;