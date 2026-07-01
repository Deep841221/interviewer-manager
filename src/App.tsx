import { useState } from "react";
import "./App.css";

const availabilityData = [
  { day: "Monday", slots: ["9-10", "10-11"] },
  { day: "Tuesday", slots: ["9-10", "10-11"] },
  { day: "Wednesday", slots: ["10-11"] },
  { day: "Thursday", slots: ["2-3"] },
  { day: "Friday", slots: ["2-3", "3-4"] },
];

function App() {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const toggleSlot = (day: string, slot: string) => {
    const key = `${day} ${slot}`;

    if (selectedSlots.includes(key)) {
      setSelectedSlots(selectedSlots.filter((item) => item !== key));
    } else {
      setSelectedSlots([...selectedSlots, key]);
    }
  };

  return (
    <div className="container">
      <h1>Interviewer Availability Manager</h1>

      <div className="days-grid">
        {availabilityData.map((item) => (
          <div className="card" key={item.day}>
            <h2>{item.day}</h2>

            {item.slots.map((slot) => {
              const key = `${item.day} ${slot}`;

              return (
                <button
                  key={slot}
                  className={
                    selectedSlots.includes(key)
                      ? "slot-btn active"
                      : "slot-btn"
                  }
                  onClick={() => toggleSlot(item.day, slot)}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="summary">
        <h2>Availability Summary</h2>

        {selectedSlots.length === 0 ? (
          <p>No interviewer availability selected</p>
        ) : (
          selectedSlots.map((slot) => <p key={slot}>✔ {slot}</p>)
        )}
      </div>
    </div>
  );
}

export default App;