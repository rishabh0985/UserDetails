import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Details = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    address: "",
    pincode: "",
    dob: null,
    mobile: "",
    countryCode: "+91",
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url("https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          padding: "3rem",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          User Details
        </h3>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label> Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter Username"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
            title="Only characters are allowed"
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500%",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter Full Name"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
            pattern="[A-Za-z\s]*"
            title="Only characters are allowed"
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500%",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Mobile Number</label>
          <div style={{ display: "flex", gap: "15px" }}>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              style={{
                padding: "10px",
                borderRadius: "5px 0 0 5px",
                border: "1px solid #ccc",
                backgroundColor: "#f0f0f0",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Enter Mobile Number"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "0 5px 5px 0",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
              maxLength="10"
              title="Only numbers are allowed"
            />
          </div>
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Enter Pincode"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
            pattern="\d*"
            maxLength="6"
            title="Only numbers are allowed"
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Date of Birth</label>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={formData.dob ? formData.dob.toLocaleDateString() : ""}
              onClick={toggleCalendar}
              readOnly
              placeholder="Select Date of Birth"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                cursor: "pointer",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
            />
            {showCalendar && (
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                  zIndex: "10",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                  marginBottom: "10px",
                }}
              >
                <Calendar
                  onChange={handleDateChange}
                  value={formData.dob}
                  showNavigation
                />
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "2px",
          }}
        >
          <label>Upload File</label>
          <input
            type="file"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
