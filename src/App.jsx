import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { fr } from "date-fns/locale"
import { Button } from "react-bootstrap"
import notes from './notes'
import moods from './expression'
import ENICarthage from "./assets/ENICarthage_Logo.png"
import DRAX from "./assets/draxlmaier-Logo.png"


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

    const formatDate = (date) => {
      if (!date) return '';
      return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
    };
    
    const getNote = (date) => {
      const formattedDate = formatDate(date);
      const noteObject = notes.find(note => note.date === formattedDate);
      return noteObject ? { note: noteObject.note, mood: noteObject.mood } : { note: '', mood: '' };
    };

    const getMoodDetails = (moodName) => {
      const mood = moods.find(m => m.mood === moodName);
      return mood || { color: '#FFFFFF', expression: '' };
  };

    const { note: selectedDateNote, mood: selectedMood } = getNote(selected);
    const expression = getMoodDetails(selectedMood).expression
    const color=getMoodDetails(selectedMood).color
  return (
    <div className="datepicker-container">
      <header>
        <img src={ENICarthage} alt="ENICarthage" />
        <img src={DRAX} alt="DRÄXLMAIER" />
      </header>
      <h4 className='title'>Mes Journées en Bref</h4>
      {/* Calendar with blur effect when the popover is shown */}
      <div className={showMessage ? "calendar-blur" : ""}>
        <DayPicker
          startMonth={new Date(2024, 7)} // August 2024
          endMonth={new Date(2024, 8)} // September 2024
          mode="single"
          selected={selected}
          onSelect={handleDaySelect}
          disabled={[
            { from: new Date(2024, 7, 1), to: new Date(2024, 7, 14) }, // Disable August 1-14
            { from: new Date(2024, 8, 14), to: new Date(2024, 8, 30) }, // Disable September 14-30
            { dayOfWeek: [0,6] }
          ]}
          locale={fr}
        />
      </div>

      {/* Popover Message */}
      {showMessage && (
        <div
        className="popover-message"
        style={{
          backgroundColor: "white",
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: "4px",
          boxShadow: `inset 0 0 20px ${color}`,
        }}
        >
          <h1 className="popover-message--date">{selected.toLocaleDateString()}</h1>
          <h2 className='popover-message--expression'>{expression}</h2>
          <p className='popover-message--mood' style={{fontWeight:"600"}}>{selectedMood}</p>
          <p className='popover-message--note'>{selectedDateNote && <p>{selectedDateNote}</p>}</p>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyDatePicker
