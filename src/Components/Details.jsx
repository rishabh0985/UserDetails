import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Details = () => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    Username: false,
    mobile: false,
    email: false,
    address: false,
    state: false,
    pincode: false,
    dob: false,
  });

  const [dob, setDob] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setDob(date);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f5f5f5", // Light background color
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          gap: "20px", // Increased gap for better spacing
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Enter Your Full-Name</label>
          <input
            name="name"
            placeholder="Enter Your Name"
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            style={{
              height: "30px",
              width: "100%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isFocused.name ? "#000" : "rgba(0, 0, 0, 0.3)",
              fontSize: "15px",
              padding: "5px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Enter Username</label>
          <input
            name="Username"
            placeholder="Enter Your Name"
            onFocus={() => handleFocus("Username")}
            onBlur={() => handleBlur("Username")}
            style={{
              height: "30px",
              width: "100%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isFocused.Username ? "#000" : "rgba(0, 0, 0, 0.3)",
              fontSize: "15px",
              padding: "5px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Mobile Number</label>
          <input
            name="mobile"
            placeholder="Enter Your Mobile Number"
            onFocus={() => handleFocus("mobile")}
            onBlur={() => handleBlur("mobile")}
            style={{
              height: "30px",
              width: "100%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isFocused.mobile ? "#000" : "rgba(0, 0, 0, 0.3)",
              fontSize: "15px",
              padding: "5px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter Your Email"
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            style={{
              height: "30px",
              width: "100%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isFocused.email ? "#000" : "rgba(0, 0, 0, 0.3)",
              fontSize: "15px",
              padding: "5px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Address</label>
          <input
            name="address"
            placeholder="Enter Your Address"
            onFocus={() => handleFocus("address")}
            onBlur={() => handleBlur("address")}
            style={{
              height: "30px",
              width: "100%",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isFocused.address ? "#000" : "rgba(0, 0, 0, 0.3)",
              fontSize: "15px",
              padding: "5px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Date of Birth</label>
          <div
            style={{
              height: "40px",
              width: "100%",
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: isFocused.dob ? "#000" : "rgba(0, 0, 0, 0.3)",
              padding: "5px",
              transition: "border-color 0.3s ease",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              boxSizing: "border-box",
              cursor: "pointer",
              position: "relative", // Important for positioning calendar
            }}
            onClick={toggleCalendar}
          >
            <input
              type="text"
              value={dob ? dob.toLocaleDateString() : ""}
              readOnly
              placeholder="Select Your Date of Birth"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                fontSize: "16px",
                outline: "none",
                padding: "0",
              }}
            />
            {showCalendar && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  zIndex: 1,
                }}
              >
                <Calendar
                  onChange={handleDateChange}
                  value={dob}
                  view="month"
                  showNavigation
                />
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px", // Adjusted gap for better spacing
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label>State</label>
            <input
              name="state"
              placeholder="Enter Your State"
              onFocus={() => handleFocus("state")}
              onBlur={() => handleBlur("state")}
              style={{
                height: "30px",
                width: "100%",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isFocused.state ? "#000" : "rgba(0, 0, 0, 0.3)",
                fontSize: "15px",
                padding: "5px",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label>Pincode</label>
            <input
              name="pincode"
              placeholder="Enter Your Pincode"
              onFocus={() => handleFocus("pincode")}
              onBlur={() => handleBlur("pincode")}
              style={{
                height: "30px",
                width: "100%",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isFocused.pincode ? "#000" : "rgba(0, 0, 0, 0.3)",
                fontSize: "15px",
                padding: "5px",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
