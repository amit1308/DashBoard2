import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.jpg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOptimizer,
  updateGateway,
  updateCustomerName,
  updateLocation,
  updateZone,
} from "../../features/gatewayOptimizerSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ByPass from "../Heading/ByPass";
import { toast } from "react-toastify";

function Heading({ dataopti }) {
  const dispatch = useDispatch();

  const [selectedOptimizer, setSelectedOptimizer] = useState([]);

  // all gateways Id
  const [selectedGateway, setSelectedGateway] = useState("");
  const [gatewaysIds, setGatewayIds] = useState([]);

  // start
  // customer,zone,location
  const [dashboardData, setDashboardData] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [zone, setZone] = useState([]);
  const [location, setLocation] = useState([]);

  const [selectedZone, setSelectedZone] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
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
          "http://44.202.86.124:5000/allGateways"
          // "http://192.168.1.5:5000/allGateways"
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
    dispatch(updateCustomerName(option.target.value));
    setSelectedLocation("");
    setSelectedZone("");
  }

  async function handleZoneClick(option) {
    setSelectedZone(option.target.value);
    setSelectedLocation("");
    dispatch(updateZone(option.target.value));
  }

  async function handleLocationClick(option) {
    setSelectedLocation(option.target.value);
    dispatch(updateLocation(option.target.value));
  }

  //end

  useEffect(() => {
    async function allGateways() {
      const response = await axios.get("http://44.202.86.124:5000/allGateways");
      setGatewayIds(response.data);
    }
    allGateways();
  }, []);

  // All optimizer Id correspoding to the selected gateway Id
  const [optimizerIds, setOptimizerIds] = useState([]);
  async function optimizer(e) {
    setSelectedGateway(e.target.value);
    const response = await axios.post(
      "http://44.202.86.124:5000/getOptimizer",
      {
        GatewayId: e.target.value,
      }
    );
    setOptimizerIds(response.data[0].OptimizerIds);
    setSelectedOptimizer("");
    dispatch(updateGateway(e.target.value));
    dispatch(updateOptimizer(""));
  }

  // All the Latest data from selected optimizer and gateway id
  const [param, setParam] = useState({});
  async function getData(e) {
    
    setSelectedOptimizer(e.target.value);
    const data = await dataopti(e.target.value, selectedGateway,selectedCustomer,selectedZone,selectedLocation);
    console.log(data);
    setParam(data);
    dispatch(updateOptimizer(e.target.value));

    // const graphData = await RecievedData(e.target.value,selectedGateway);
  }

  return (
    <>
      <div className="heading">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            {" "}
            <img
              style={{ marginTop: "12px", width: "40px", height: "40px" }}
              src={logo}
              alt="Logo"
            />
          </div>
          <div>
            {" "}
            <h2 style={{ color: "black", paddingLeft: "10px" }}>
              IntelliSaver
            </h2>
          </div>
        </div>

        <div>
          <Box sx={{ padding: "10px", borderRadius: "5px" }}>
            <FormControl
              sx={{
                // marginTop:2.5,
                width: 150,
                //  height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
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
                width: 150,
                //  height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
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
                width: 150,
                //  height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
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
          <Box sx={{ borderRadius: "5px" }}>
            <FormControl sx={{ width: 150, marginTop: 1.2 }}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: " black" }}
              >
                Gateway ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="GatewayId"
                value={selectedGateway}
                onChange={optimizer}
                sx={{ color: "black" }}
              >
                {gatewaysIds?.map((obj) => (
                  <MenuItem value={obj.GatewayID}> {obj.GatewayID}</MenuItem>
                ))}
                {/* <MenuItem  value={'sadsfdsf'}> {"dsadsafds"}</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div>
          <Box sx={{ borderRadius: "5px" }}>
            <FormControl
              sx={{
                marginTop: 1.2,
                width: 150,
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
                Optimizer ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="OptimizerId"
                onChange={getData}
                value={selectedOptimizer}
                sx={{ color: "black" }}
              >
                {optimizerIds?.map((val) => (
                  <MenuItem value={val}> {val}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div
          style={{
            // margin: "30px",
            display: "flex",
            flexDirection: "row",
            color: "whitesmoke",
          }}
        >
          <div>
            <ByPass />
          </div>
          <div
            style={{
              // margin: "30px",
              display: "flex",
              marginLeft: "40px",
              marginTop: "7px",
              color: "whitesmoke",
            }}
          >
            <h4 style={{ color: "#555152" }}>By-Pass</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
