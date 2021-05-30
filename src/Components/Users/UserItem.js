import './UserItem.css';

const UserItem = function(props) {
  return (
    <div>
      <div className='user-item'>
        <p>{`${props.name} (${props.age} years old)`}</p>
      </div>
    </div>
  )
}

export default UserItem;