import React, { useEffect, useState } from "react";
import logo from '../../imgs/logo.jpg';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Datepicker from '../Heading/DatePicker';
import { useDispatch, useSelector } from 'react-redux'
import {updateOptimizer, updateGateway} from "../../features/gatewayOptimizerSlice";

function Heading({ dataopti }) {
  const dispatch = useDispatch()


  const [selectedOptimizer , setSelectedOptimizer] = useState([]);

  // all gateways Id
  const [selectedGateway, setSelectedGateway] = useState("");
  const [gatewaysIds, setGatewayIds] = useState([]);



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
    const response = await axios.post("http://44.202.86.124:5000/getOptimizer", {
      GatewayId: e.target.value,
    });
    setOptimizerIds(response.data[0].OptimizerIds);
    setSelectedOptimizer("");
    dispatch(updateGateway(e.target.value))
    dispatch(updateOptimizer(''))
  }
  
  // All the Latest data from selected optimizer and gateway id
  const [param, setParam] = useState({});
  async function getData(e) {
    setSelectedOptimizer(e.target.value);
    const data = await dataopti(e.target.value, selectedGateway);
    console.log(data);
    setParam(data);
    dispatch(updateOptimizer(e.target.value))

    // const graphData = await RecievedData(e.target.value,selectedGateway);

  }

  


  return (
    <>
    
      <div className="heading">
    <div
    style={{display:'flex',flexDirection:"row",}}
    >
       <div > <img style={{marginTop:"12px", paddingLeft:"40px", width: "40px",height: "40px", }} src={logo} alt="Logo" /></div>
       <div> <h2 style={{ paddingLeft:"20px",color: "black", }}>IntelliSaver</h2></div>  
      
       </div>

      

        {/* <div>
          <Box
          
            sx={{ borderRadius: "5px" }}
          >
            <FormControl
              sx={{ width: 200, marginTop:0.5, }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: " black" }}>
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
             
              </Select>
            </FormControl>
          </Box>
        </div>
 */}


        {/* <div>
          <Box
          
            sx={{ borderRadius: "5px" }}
          >
            <FormControl
              sx={{
                marginTop:0.5,
                width: 200,
              
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
        </div> */}
        
        <div
          style={{
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            color: "whitesmoke",
          }}
        >
          <div>
            
          </div>
        
        </div>
      </div>
    </>
    );
};

export default Heading;