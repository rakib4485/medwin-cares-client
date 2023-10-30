import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, specalist, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold  text-secondary">{specalist}</h2>
        <h3 className="text-base font-semibold text-gray-500 italic"> {name}</h3>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white border-0 bg-gradient-to-r from-primary to-secondary" onClick={() => setTreatment(appointmentOption)}
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;