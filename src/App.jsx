import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { fr } from "date-fns/locale"
import { Button } from "react-bootstrap"
import notes from './notes'
import moods from './expression'


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

    // Format date to match the keys in your notes object
    const formatDate = (date) => {
      if (!date) return '';
      return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
    };
    
    // Function to get note for the selected day
    const getNote = (date) => {
      const formattedDate = formatDate(date);
      const noteObject = notes.find(note => note.date === formattedDate);
      return noteObject ? { note: noteObject.note, mood: noteObject.mood } : { note: '', mood: '' };
    };

    const getMoodDetails = (moodName) => {
      const mood = moods.find(m => m.mood === moodName);
      return mood || { color: '#FFFFFF', expression: '' }; // Default values if mood not found
  };

    const { note: selectedDateNote, mood: selectedMood } = getNote(selected);
    const expression = getMoodDetails(selectedMood).expression
    const color=getMoodDetails(selectedMood).color
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
            { from: new Date(2024, 7, 1), to: new Date(2024, 7, 14) }, // Disable August 1-15
            { from: new Date(2024, 8, 14), to: new Date(2024, 8, 30) }, // Disable September 14-30
            { dayOfWeek: [0,6] }
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
        <div className="popover-message" style={{ backgroundColor:"#e9f5f3",borderColor: color, borderStyle: 'solid', borderWidth: '4px' }}>
          <h1 className="popover-message--date">{selected.toLocaleDateString()}</h1>
          <p className='popover-message--expression'>{expression}</p>
          <p className='popover-message--mood'>{selectedMood}</p>
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
