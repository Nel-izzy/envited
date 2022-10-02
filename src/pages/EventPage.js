import React, { Fragment } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation();
  const { eventName, hostName, startTime, endTime, eventLocation, eventPhoto } =
    location.state;

  return (
    <Fragment>
      <h2>Your Event Details</h2>
      <section className="row">
        <div className="col-sm-6">
          <h4>
            {eventName} <br />
          </h4>
          <small>Hosted by {hostName}</small>

          <p>
            <FaRegCalendarAlt />
            <Moment>{startTime}</Moment> to <Moment>{endTime}</Moment>
          </p>

          <p>
            <GoLocation /> Street name <br />
            {eventLocation}
          </p>
        </div>

        <p className="col-sm-6">
          <img
            src={eventPhoto ? eventPhoto : `images/Birthday cake.png`}
            alt="Event Photo"
            className="img-fluid"
          />
        </p>
      </section>
    </Fragment>
  );
};

export default EventPage;
