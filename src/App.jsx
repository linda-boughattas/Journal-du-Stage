import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { fr } from "date-fns/locale";
import { Button } from "react-bootstrap"; // Import Button from React Bootstrap


export function MyDatePicker() {
  const [selected, setSelected] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
    setSelected(null);
  };

  const handleDaySelect = (day) => {
    setSelected(day);
    setShowMessage(true);
  };

  return (
    <div className="datepicker-container">
      {/* Calendar with blur effect when the popover is shown */}
      <div className={showMessage ? "calendar-blur" : ""}>
        <DayPicker
          startMonth={new Date(2024, 7)} // August 2024
          endMonth={new Date(2024, 8)} // September 2024
          mode="single"
          selected={selected}
          onSelect={handleDaySelect}
          disabled={[
            { from: new Date(2024, 7, 1), to: new Date(2024, 7, 15) }, // Disable August 1-15
            { from: new Date(2024, 8, 14), to: new Date(2024, 8, 30) }, // Disable September 14-30
          ]}
          footer={
            selected
              ? ``
              : "Choisis un jour."
          }
          locale={fr}
        />
      </div>

      {/* Popover Message */}
      {showMessage && (
        <div className="popover-message">
          <p>{selected.toLocaleDateString()}</p>
          <h3>Vous avez sélectionné un jour !</h3>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyDatePicker
