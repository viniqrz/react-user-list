import './Modal.css';

const Modal = function(props) {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-bar'>
          <h2>Invalid Input</h2>
        </div>
        <p className='modal-message'>{props.message}</p>
        <button onClick={props.onCloseModal}>Okay</button>
      </div>
    </div>
  )
}

export default Modal;