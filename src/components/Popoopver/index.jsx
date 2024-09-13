import './style.css';
import { Button, Modal } from 'react-bootstrap';

export default function Poppover({
  expression,
  selectedDateNote,
  selected,
  selectedMood,
  handleClose,
  color,
  show,
}) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="popover-message"
          style={{
            backgroundColor: 'white',
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '4px',
            boxShadow: `inset 0 0 20px ${color}`,
          }}
        >
          <h1 className="popover-message--date">
            {selected.toLocaleDateString()}
          </h1>
          <h2 className="popover-message--expression">{expression}</h2>
          <p className="popover-message--mood" style={{ fontWeight: '600' }}>
            {selectedMood}
          </p>
          {selectedDateNote && (
            <p className="popover-message--note"> {selectedDateNote}</p>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
