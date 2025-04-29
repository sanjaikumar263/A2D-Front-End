import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form2 = () => {
  const [formData, setFormData] = useState({
    categories: "Expert Built",
    name: "",
    email: "",
    age: "",
    whatsappNumber: "",
    location: "",
    occupation: "",
    purpose: "",
    investment: "",
    motherboard: "X870E AORUS MASTER",
    processor: "Intel i9",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      console.log("Form2 submitted successfully", formData);
      axios
        .post("https://a2d-backend.onrender.com/experbuilt", formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
      setFormData({
        categories: "Expert Built",
        name: "",
        email: "",
        age: "",
        whatsappNumber: "",
        location: "",
        occupation: "",
        purpose: "",
        investment: "",
        motherboard: "X870E AORUS MASTER",
        processor: "Intel i9",
      });
      setErrors({});
    }
  };

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="form-title text-center">{formData.categories}</h3>
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
          <label>Where are you From</label>
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
          {errors.occupation && <span className="error">{errors.occupation}</span>}
        </div>
        <div className="form-group">
          <label>What is the Purpose of This PC</label>
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
          {errors.investment && <span className="error">{errors.investment}</span>}
        </div>
        <div className="form-group">
          <label>Motherboard</label>
          <select
            name="motherboard"
            className="input-box"
            value={formData.motherboard}
            onChange={handleChange}
          >
            <option value="X870E AORUS MASTER">X870E AORUS MASTER</option>
            <option value="X870E AORUS PRO ICE">X870E AORUS PRO ICE</option>
            <option value="X870E AORUS PRO">X870E AORUS PRO</option>
            <option value="X870E AORUS ELITE WIFI7">X870E AORUS ELITE WIFI7</option>
            <option value="X870 GAMING X WIFI7">X870 GAMING X WIFI7</option>
          </select>
        </div>
        <div className="form-group">
          <label>Processor</label>
          <select
            name="processor"
            className="input-box"
            value={formData.processor}
            onChange={handleChange}
          >
            <option value="Intel i9">Intel i9</option>
            <option value="Intel i7">Intel i7</option>
            <option value="Intel i5">Intel i5</option>
            <option value="Intel i3">Intel i3</option>
            <option value="AMD R9">AMD R9</option>
            <option value="AMD R7">AMD R7</option>
            <option value="AMD R5">AMD R5</option>
            <option value="AMD R3">AMD R3</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;