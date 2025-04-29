import React, { useState } from "react";
import "./Form.css";
import Form2 from "./Form2";
import axios from "axios";

const Form = () => {
  const defaultValue = {
    categories: "Built with Factory",
    name: "",
    email: "",
    whatsappNumber: "",
    location: "",
    purpose: "",
    occupation: "",
    investment: "",
    age: "",
  };

  const [formData, setFormData] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email.includes("@")) formErrors.email = "Enter a valid email address";
    if (!formData.whatsappNumber || formData.whatsappNumber.length < 10)
      formErrors.whatsappNumber = "Enter a valid WhatsApp number";
    if (!formData.age || formData.age <= 0) formErrors.age = "Enter a valid age";
    if (!formData.location) formErrors.location = "Enter a location";
    if (!formData.purpose) formErrors.purpose = "Enter the purpose";
    if (!formData.investment) formErrors.investment = "Select an investment option";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      axios
        .post("https://a2d-backend.onrender.com/post", formData)
        .then((res) => console.log(res.data))
        .catch((err) => alert('Error Mail'));
      setFormData(defaultValue);
      setErrors({});
    }
  };

  return (
    <div id="contact" className="form-container">
      <div className="toggle-buttons d-flex justify-content-center gap-4 mb-4">
        <p
          className={`toggle-option ${!show ? "active" : ""}`}
          onClick={() => setShow(false)}
        >
          Normal Built
        </p>
        <p
          className={`toggle-option ${show ? "active" : ""}`}
          onClick={() => setShow(true)}
        >
          Super Soldier Built
        </p>
      </div>
      {show ? (
        <Form2 />
      ) : (
        <div className="d-flex justify-content-center">
          {/* Uncomment if you want to include the image */}
          {/* <div className="form-left">
            <img src={pc1} alt="PC" className="form-image" />
          </div> */}
          <div className="main-form">
            <form onSubmit={handleSubmit} className="form">
              <h3 className="form-title text-center">Built with Factory</h3>
              <div className="form-group">
                <label>Enter Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-box"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="input-box"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>What is Your Exact Age</label>
                <input
                  type="number"
                  name="age"
                  className="input-box"
                  value={formData.age}
                  onChange={handleChange}
                />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>
              <div className="form-group">
                <label>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  className="input-box"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                />
                {errors.whatsappNumber && (
                  <span className="error">{errors.whatsappNumber}</span>
                )}
              </div>
              <div className="form-group">
                <label>Where are you from</label>
                <input
                  type="text"
                  name="location"
                  className="input-box"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && <span className="error">{errors.location}</span>}
              </div>
              <div className="form-group">
                <label>What do you do for a living</label>
                <input
                  type="text"
                  name="occupation"
                  className="input-box"
                  value={formData.occupation}
                  onChange={handleChange}
                />
                {errors.occupation && (
                  <span className="error">{errors.occupation}</span>
                )}
              </div>
              <div className="form-group">
                <label>What is the Purpose of this PC</label>
                <input
                  type="text"
                  name="purpose"
                  className="input-box"
                  value={formData.purpose}
                  onChange={handleChange}
                />
                {errors.purpose && <span className="error">{errors.purpose}</span>}
              </div>
              <div className="form-group">
                <label>Investment for Your Dream PC</label>
                <div className="radio-group">
                  {[
                    "30000-50000",
                    "50000-75000",
                    "75000-100000",
                    "100000+",
                  ].map((range) => (
                    <div key={range} className="radio-option">
                      <input
                        type="radio"
                        name="investment"
                        value={range}
                        checked={formData.investment === range}
                        onChange={handleChange}
                      />
                      <label>
                        Rs {range.replace("-", " - Rs ").replace("+", " and above")}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.investment && (
                  <span className="error">{errors.investment}</span>
                )}
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;