import React, { useContext, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import trip from "../assets/trip.jpg";

export default function CreateTrip() {

  const [data, setData] = useState({
    destination: "",
    days: "",
    people: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.destination || !data.days || !data.people || !data.budget) {
      alert("Please fill all the fields");
      return;
    }
  };

  return (
    <section className="create-trip">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Tell us your travel preferences</h4>
            <h1>Plan Your Trip</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>

            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  data,
                  onChange: (value) => setData({ ...data, destination: value }),
                  placeholder: "Please enter destination",
                  
                  
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">No. of Days</label>
              <input
                type="number"
                id="number"
                name = "days"
                className="form-control"
                onChange={handleChange}
                placeholder="Please enter no. of days"
              />
            </div>
            <div className="form-group">
              <label htmlFor="people">Number of People</label>
              <input
                type="number"
                id="people"
                name="people"
                className="form-control"
                onChange={handleChange}
                placeholder="Please enter no. of peoples"
              />
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                id="budget"
                name="budget"
                className="form-control"
                onChange={handleChange}
                placeholder="Please enter budget"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary trip-btn"
                onClick={handleSubmit}
              >
                Create Trip
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={trip} alt="trip" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
