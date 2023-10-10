import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import '../Kwh/Table.css';

function MyDatePicker({getDate}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

 
  const data = () => {
    console.log("Start Date:", startDate.toDateString());
    console.log("Start Time:", startDate.toTimeString());
    console.log("End Date:", endDate.toDateString());
    console.log("End Time:", endDate.toTimeString());
    getDate(startDate,endDate)
  };

  return (
    <div style={{ margin: "6px" }}>
      <div>
        <DatePicker
          placeholderText="Start Date&Time"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showIcon
          label="Date and Time"
          dateFormat="Pp"
        />
      </div>

      <div>
        <DatePicker
          placeholderText="End Date&Time"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          showIcon
          dateFormat="Pp"
        />
      </div>
      <div>
        <button
          style={{
            backgroundColor: "red",
            margin: "5px",
            marginLeft: "70px",
            color: "white",
            borderRadius: "5px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundImage: "linear-gradient(to right, red, orange)",
          }}
          onClick={data}
        >
          Send
        </button>
      </div>

      <div>
        <h1 style={{ color: "white" }}>.........................................</h1>
      </div>

      <div>
        <h1 style={{ color: "white" }}>.</h1>
      </div>
    </div>
  );
}

export default MyDatePicker;
