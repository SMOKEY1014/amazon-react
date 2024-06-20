import React from 'react'

const Modal = () => {
    return (
      <>
      <div className='modal-div' onClick={() => setOpen(false)}>
          <div style={modalStyle}>
              <h3>Test Modal</h3>
              <button onClick={() => setIsOpen(false)}>Trigger Modal Close</button>
              <p>This is a simple modal</p>
          </div>
            </div>
    </>
  )
}
const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
    borderRadius: "24px",
    boxShadow: 24,
    padding: "10px",
    textAlign: "center"
}
export default Modal