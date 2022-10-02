import React, { Fragment } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation();
  const { eventName, hostName, startTime, endTime, eventLocation } =
    location.state;

  const eventPhoto = location.state[0];

  const d1 = new Date(startTime);
  const d2 = new Date(endTime);

  function convertTimeFormat(tt) {
    var dt = new Date(tt);
    var hours = dt.getHours();
    var AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    var minutes = dt.getMinutes();
    minutes = minutes <= 9 ? "0" + dt.getMinutes() : dt.getMinutes();
    var finalTime = hours + ":" + minutes + AmOrPm;
    return finalTime;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Fragment>
      <section className="row  event-details-wrapper">
        <div className="col-sm-6">
          <p>
            <span className="event-name">
              {eventName} <br />
            </span>
            <small className="host-name">Hosted by {hostName}</small>
          </p>

          <div className="mt-5 time-wrapper">
            <FaRegCalendarAlt style={{ color: "#8456EC" }} />
            <p>
              <span className="start-time">
                {`${d1.getDate()}  ${months[d1.getMonth()]} ${convertTimeFormat(
                  d1
                )} `}
              </span>
              <br />
              to{" "}
              <span className="end-time">
                {`${d2.getDate()}  ${months[d2.getMonth()]} ${convertTimeFormat(
                  d2
                )} UTC +10`}
              </span>
            </p>
          </div>

          <div className="time-wrapper">
            <GoLocation style={{ color: "#8456EC" }} />
            <p>
              <span className="location"> Street name </span>
              <br />
              {eventLocation}
            </p>
          </div>
        </div>

        <p className="col-sm-6">
          <img
            src={
              eventPhoto
                ? URL.createObjectURL(eventPhoto)
                : `images/Birthday cake.png`
            }
            alt="Event"
            className="img-fluid"
          />
        </p>
      </section>
    </Fragment>
  );
};

export default EventPage;
