import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="row">
      <p className="col-sm-6">
        <img
          src="images/LandingPage.png"
          alt="Landing Page"
          className="img-fluid"
        />
      </p>

      <p className="col-sm-6">
        <p className="right-content">
          <span className="imagine">Imagine if</span>
          <span className="snapchat">Snapchat</span>
          <span className="events">had events.</span>
        </p>
        <p className="host">
          Easily host and share your events with your friends across any social
          Media
        </p>

        <p className="event-wrapper mt-5">
          <button
            type="button"
            className="event-btn"
            onClick={() => navigate("/event-form")}
          >
            <span className="event-text">Create my event</span>
          </button>
        </p>
      </p>
    </section>
  );
};

export default LandingPage;
