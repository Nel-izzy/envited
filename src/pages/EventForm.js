import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const navigate = useNavigate();

  const eventDetails = {
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
  };

  const [event, setEvent] = useState(eventDetails);
  const [eventPhoto, setEventPhoto] = useState(null);

  const { eventName, hostName, startTime, endTime, eventLocation } = event;

  const onChange = (e) =>
    setEvent({ ...event, [e.target.name]: e.target.value });

  const onChangePhoto = (e) => {
    setEventPhoto([...e.target.files]);
    console.log(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    navigate("/event-details", { state: { ...event, ...eventPhoto } });
  };

  return (
    <form onSubmit={onSubmit} className="event-form">
      <h2 className="text-primary">Add Event</h2>
      <p>
        <input
          type="text"
          placeholder="Event Name"
          name="eventName"
          required
          value={eventName}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Host Name"
          name="hostName"
          value={hostName}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="datetime-local"
          placeholder="start Time"
          name="startTime"
          value={startTime}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="datetime-local"
          placeholder="EndTime"
          name="endTime"
          value={endTime}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Location"
          name="eventLocation"
          value={eventLocation}
          onChange={onChange}
        />
      </p>
      <p>
        <input type="file" placeholder="Event Photo" onChange={onChangePhoto} />
      </p>
      <p>
        <input
          type="submit"
          value="Next"
          className="btn btn-block btn-primary"
        />
      </p>
    </form>
  );
};

export default EventForm;
