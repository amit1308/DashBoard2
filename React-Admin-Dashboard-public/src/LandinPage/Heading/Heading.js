import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.jpg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { FaBeer, FaPowerOff } from "react-icons/fa";
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

  //gateway
  const [dashboardData, setDashboardData] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [zone, setZone] = useState([]);
  const [location, setLocation] = useState([]);
  const [gatewayID, setGatewayID] = useState([]);
  const [optimizerId, setOptimizerId] = useState([]);


  const [selectedGateway, setSelectedGateway] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedoptimizerId, setSelectedoptimizerId] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");



  useEffect(() => {
    
      let customers = dashboardData.map((item) => item.CustomerName);
      customers = new Set(customers);
      customers = [...customers].slice(1);
      setCustomerName(customers);
    

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
      let opti = dashboardData.map((item) => {
        if (
          item.CustomerName == selectedCustomer &&
          item.Zone == selectedZone &&
          item.Location == selectedLocation &&
          item.GatewayID == selectedGateway
        ) {
          return item.OptimizerID;
        }
      });
      opti = new Set(opti);
      opti = [...opti].slice(1);
      setOptimizerId(opti);
    }
  }, [
    dashboardData,
    selectedGateway,
    selectedZone,
    selectedLocation,
    selectedCustomer,
    selectedoptimizerId
  ]);

  useEffect(() => {
    async function allData() {
      try {
        const response = await axios.get(
          "http://3.106.217.161:5000/AllData"
          // "http://192.168.1.7:5000/AllData"
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
    setSelectedoptimizerId("");
    setSelectedLocation("");
    setSelectedZone("");
    setSelectedGateway("");
    dispatch(updateCustomerName(option.target.value));
    getData();

  }

  async function handleZoneClick(option) {
    setSelectedZone(option.target.value);
    setSelectedLocation("");
    setSelectedoptimizerId("");
    setSelectedGateway("");
    dispatch(updateZone(option.target.value));
    getData();
  }

  async function handleLocationClick(option) {
    setSelectedLocation(option.target.value);
    setSelectedoptimizerId("");
    setSelectedGateway("");
    dispatch(updateLocation(option.target.value));
    getData();
  }

  async function handleGatewayClick(option) {
    setSelectedGateway(option.target.value);
   setSelectedoptimizerId("");
   dispatch(updateGateway(option.target.value));
   getData();
  }

  async function getData(option) {
    
    const data = await dataopti(
     option,
      selectedGateway,
      selectedCustomer,
      selectedZone,
      selectedLocation
    );
  }

  async function handleOptimizerClick (option) {
    setSelectedoptimizerId(option.target.value);
    dispatch(updateOptimizer(option.target.value));
    getData(option.target.value);

  };
//   function handleOptimizerClick1(option){
//     getData();
// handleOptimizerClick(option);
//   }


  //end
function handleBypass(){
  handleClick();
  byPass();
}

  const [isOn, setIsOn] = useState(0); // Initial state: off

  const handleClick = () => {
    setIsOn(!isOn); // Toggle the state
  };
  const byPass = async () => {
    const response = await axios.post(
      "http://3.106.217.161:5000/controlData",
      // "http://localhost:1234/controlData",
      {
        ToggleRequest: isOn,
        CustomerName: selectedCustomer,
        Zone: selectedZone,
        Location: selectedLocation,
        GatewayID: selectedGateway,
        OptimizerID: selectedoptimizerId,
      }
    );

    return response.data;
  };

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
                  label="GatewayId"
                  value={selectedoptimizerId}
                  onChange={handleOptimizerClick}
                  sx={{ color: "black" }}
                >
                  {optimizerId.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
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
            <div
              onClick={handleBypass}
              style={{
                backgroundColor: "#40b9d6",
                width: "190%",
                height: "100%",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <p>
                <FaPowerOff size="35" />
              </p>
            </div>
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
     
            <h4 style={{ color: "#555152" }}>{isOn ? 'OFF':'ON'}</h4>
          
           
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Heading;
