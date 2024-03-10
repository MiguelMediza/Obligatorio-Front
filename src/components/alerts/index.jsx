import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function Example(props ) {
  const [show, setShow] = useState(true);
  const navigation = useNavigate();
  const handleClose = () => {
    if(props.estado == true){
      if(props.lugar == "register"){
        return navigation('/login'),  setShow(false);
      }
      return navigation('/'),  setShow(false);
    }
    else{
      console.log(props.lugar);
      if(props.lugar == "register"){
        return navigation('/register'),  setShow(false);
      }
      else{
        return navigation('/login'),  setShow(false);
      }
      
    }
    
   
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.mensaje}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;