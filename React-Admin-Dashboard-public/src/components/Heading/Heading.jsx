import React, { useEffect, useState } from "react";
import "./Heading.css";
// import {Select, MenuItem} from "@mui/material";
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
} from "../../features/gatewayOptimizerSlice";

function Heading({ dataopti }) {
  const dispatch = useDispatch();

  // const param = data ? data[0] : {};
  //   console.log(param);
  // console.log('DataOpti');
  // console.log(dataopti);
  // console.log("RecievedData")
  // console.log(RecievedData);
  const [selectedOptimizer, setSelectedOptimizer] = useState([]);

  // all gateways Id
  const [selectedGateway, setSelectedGateway] = useState("");
  const [gatewaysIds, setGatewayIds] = useState([]);

  useEffect(() => {
    async function allGateways() {
      const response = await axios.get("http://44.202.86.124:5000/allGateways");
      // console.log("customer");
      setGatewayIds(response.data);
      
    }
    allGateways();
  }, []);

  // All optimizer Id correspoding to the selected gateway Id
  const [optimizerIds, setOptimizerIds] = useState([]);
  async function optimizer(e) {
    setSelectedGateway(e.target.value);
    const response = await axios.post(
      "http://3.106.217.161:5000/getOptimizer",
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
    const data = await dataopti(e.target.value, selectedGateway);
    console.log(data);
    setParam(data);
    dispatch(updateOptimizer(e.target.value));

    // const graphData = await RecievedData(e.target.value,selectedGateway);
  }

  return (
    <>
      <div className="heading">
        <div>
          <h1 style={{ color: "yellow" }}>AC Optimizer</h1>
        </div>

        <div>
          <Box
            className={"color-blue"}
            sx={{ padding: "10px", borderRadius: "5px" }}
          >
            <FormControl
              sx={{
                // marginTop:2.5,
                width: 200,
                //    height: 40,
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: " rgb(209, 231, 11)" }}
              >
                Gateway ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="GatewayId"
                value={selectedGateway}
                onChange={optimizer}
                sx={{ color: " rgb(209, 231, 11)" }}
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
          <Box
            className={"color-blue"}
            sx={{ padding: "10px", borderRadius: "5px" }}
          >
            <FormControl
              sx={{
                // marginTop:2.5,
                width: 200,
                //    height: 40,
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: " rgb(209, 231, 11)" }}
              >
                Optimizer ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="OptimizerId"
                onChange={getData}
                value={selectedOptimizer}
                sx={{ color: " rgb(209, 231, 11)" }}
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
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            color: "whitesmoke",
          }}
        >
          <div>
            <span>{`Date: ${param["Date"] || "N/A"}`}</span>
          </div>
          <div>
            <span>{`Time: ${param["Time"] || "N/A"}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
