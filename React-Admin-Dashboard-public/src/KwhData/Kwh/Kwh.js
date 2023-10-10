import React, { useEffect, useState } from "react";
import "./Kwh.css";
import { cardsData } from "../../Data/Data";
import axios from "axios";
import Table from "../Kwh/TableData";
import Heading from "../Heading/Heading";
import Datepicker from "../Heading/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { toast } from "react-toastify";
import { current } from "@reduxjs/toolkit";

const Kwh = () => {
  //gateway
  const [dashboardData, setDashboardData] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [zone, setZone] = useState([]);
  const [location, setLocation] = useState([]);
  const [gatewayID, setGatewayID] = useState([]);
  const [meterId, setmeterId] = useState([]);
  const [table, setTable] = useState([]);
  const [startDateTime, setStartDateTime] = useState([]);
  const [endDateTime, setEndDateTime] = useState([]);

  const [selectedGateway, setSelectedGateway] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMeterId, setSelectedMeterId] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");

  useEffect(() => {
    if (customerName.length == 0) {
      let customers = dashboardData.map((item) => item.CustomerName);
      customers = new Set(customers);
      customers = [...customers].slice(1);
      setCustomerName(customers);
    }

    if (selectedCustomer) {
      console.log(customerName);
      let zones = dashboardData.map((item) => {
        if (item.CustomerName == selectedCustomer) {
          return item.Zone;
        }
      });
      console.log(zones);
      zones = new Set(zones);
      zones = [...zones].slice(1);
      setZone(zones);
    }

    if (selectedZone && selectedCustomer) {
      let locations = dashboardData.map((item) => {
        if (
          item.CustomerName == selectedCustomer &&
          item.Zone == selectedZone
        ) {
          return item.Location;
        }
      });
      locations = new Set(locations);
      locations = [...locations].slice(1);
      setLocation(locations);
    }

    if (selectedLocation && selectedZone && selectedCustomer) {
      let gatewayId = dashboardData.map((item) => {
        if (
          item.CustomerName == selectedCustomer &&
          item.Zone == selectedZone &&
          item.Location == selectedLocation
        ) {
          return item.GatewayID;
        }
      });
      gatewayId = new Set(gatewayId);
      gatewayId = [...gatewayId].slice(1);
      setGatewayID(gatewayId);
    }

    if (
      selectedGateway &&
      selectedLocation &&
      selectedZone &&
      selectedCustomer
    ) {
      let meterIds = dashboardData.map((item) => {
        if (
          item.CustomerName == selectedCustomer &&
          item.Zone == selectedZone &&
          item.Location == selectedLocation &&
          item.GatewayID == selectedGateway
        ) {
          return item.meterID;
        }
      });
      meterIds = new Set(meterIds);
      meterIds = [...meterIds].slice(1);
      setmeterId(meterIds);
    }
  }, [
    dashboardData,
    selectedGateway,
    selectedZone,
    selectedLocation,
    selectedCustomer,
  ]);

  useEffect(() => {
    async function allData() {
      try {
        const response = await axios.post(
          // "http://44.202.86.124:5000/allGateways"
          "http://localhost:5000/allGateways"
        );
        setDashboardData(response.data);
        console.log(response.data, "allData");
      } catch (error) {
        toast("There is error in fetching data Please refresh the page");
      }
    }
    allData();
  }, []);

  async function handleCustomerClick(option) {
    setSelectedCustomer(option.target.value);
    setSelectedMeterId("");
    setSelectedLocation("");
    setSelectedZone("");
    setSelectedGateway("");

    // const response = await axios.post("http://44.202.86.124:5000/allGateways", {
    //   CustomerName: option.target.value,
    // });
    // setZone(response.data.map((item) => item.Zone));
  }

  async function handleZoneClick(option) {
    setSelectedZone(option.target.value);
    setSelectedLocation("");
    setSelectedMeterId("");
    setSelectedGateway("");
  }

  async function handleLocationClick(option) {
    setSelectedLocation(option.target.value);
    setSelectedMeterId("");
    setSelectedGateway("");
  }

  async function handleGatewayClick(option) {
    setSelectedGateway(option.target.value);
    setSelectedMeterId("");
  }

  const handleMeterClick = (option) => {
    setSelectedMeterId(option.target.value);
  };

  async function getDate(startDate, endDate) {
    console.log(startDate, "start");
    console.log(endDate, "end");

    const response = await axios.post(
      // "http://44.202.86.124:5000/getDataKwh"
      "http://localhost:5000/getDataKwh",
      {
        Zone: selectedZone,
        pageNumber: "0",
        CustomerName: selectedCustomer,
        Location: selectedLocation,
        // meterID: selectedMeterId,
        GatewayID: selectedGateway,
        startDate: startDate,
        endDate: endDate,

        // "Zone": "Haryana",
        // "pageNumber": "0",
        // "CustomerName": "SBI",
        // "Location": "Gurugram",
        // "meterID": "12321431213212",
        // "GatewayID": "NGCS20230110015656"
      }
    );
    setTable(response.data);
    console.log(response.data, "table");
  }

  //end

  const [toShow, setToShow] = useState(cardsData);
  const opti = useSelector((state) => {
    console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
    return state.gatewayOptimizer.OptimizerId;
  });

  useEffect(() => {
    if (!opti) setToShow(cardsData);
  }, [opti]);

  async function dataopti(OptimizerId, GatewayId) {
    const response = await axios.post(
      "http://44.202.86.124:5000/getLatestData",
      {
        GatewayId,
        OptimizerId,
      }
    );
    setToShow([response.data]);
    return response.data;
  }

  return (
    <div>
      <Heading dataopti={dataopti} />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div>
            <Box sx={{ padding: "10px", borderRadius: "5px" }}>
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Customer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Customer"
                  value={selectedCustomer}
                  onChange={handleCustomerClick}
                  sx={{ color: "black" }}
                >
                  {customerName.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <Box
              // className={"color-blue"}
              sx={{ padding: "10px", borderRadius: "5px" }}
            >
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Zone
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="zone"
                  value={selectedZone}
                  onChange={handleZoneClick}
                  sx={{ color: "black" }}
                >
                  {zone.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <Box sx={{ padding: "10px", borderRadius: "5px" }}>
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Location"
                  value={selectedLocation}
                  onChange={handleLocationClick}
                  sx={{ color: "black" }}
                >
                  {location.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <Box sx={{ padding: "10px", borderRadius: "5px" }}>
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Gateway ID
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="GatewayId"
                  value={selectedGateway}
                  onChange={handleGatewayClick}
                  sx={{ color: "black" }}
                >
                  {gatewayID.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          {/* <div>
            <Box sx={{ padding: "10px", borderRadius: "5px" }}>
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Meter ID
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="GatewayId"
                  value={selectedMeterId}
                  onChange={handleMeterClick}
                  sx={{ color: "black" }}
                >
                  {meterId.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div> */}

          <div style={{ marginBottom: "10px" }}>
            <Box sx={{ padding: "10px", borderRadius: "5px" }}>
              <FormControl
                sx={{
                  // marginTop:2.5,
                  width: 200,
                  //  height: 40,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Date&Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <Datepicker getDate={getDate} />
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div>
          <div className="parentContainer">
            <div className="flex-direction-row">
              <Table tableD={table} />
            </div>

            <div className="flex-direction-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kwh;
