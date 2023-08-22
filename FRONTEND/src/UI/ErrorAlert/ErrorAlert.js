import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ErrorAlert(props) {
  return (
    <Modal show={true} onHide={props.onHide} animation={true}centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.ErrorHead}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ErrorAlert;
