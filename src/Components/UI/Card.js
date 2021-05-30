import './Card.css';

const Card = function(props) {
  return (
    <div className={'card ' + props.className}>
      {props.children}
    </div>
  )
}

export default Card;