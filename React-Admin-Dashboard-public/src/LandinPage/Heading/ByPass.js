import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaBeer,FaPowerOff } from 'react-icons/fa';
import Heading from "../Heading/Heading";
// import { motion } from "framer-motion";

export default function CircularPro() {
 const [byPassData,setByPassData] = useState("");
 const [gatewayId, setGatewayId] = useState("");
 const [optimizerId, setOptimizerId] = useState("");
 const [customerName, setCustomerName] = useState("");
 const [zone, setZone] = useState("");
 const [location, setLocation] = useState("");
  // const opti = useSelector((state) => {
  //   // console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
  //   setOptimizerId(state.gatewayOptimizer.OptimizerId); 

  // });


  async function sendData(){
    const response = await axios.post(
      "http://54.79.169.45:1234/controlData"
      // "http://localhost:1234/controlData"
    ,{
        // RESET: "",
      ToggleRequest: "1",
    //   CustomerName: customerName,
    //   Zone: zone,
    //   Location: location,
    //   GatewayID: gatewayId,
    // OptimizerID: optimizerId,
    // OptimizerID: "NGCSEEE2E95BE0",
      // Flag: "true",
      FirstPowerOnObservation:"",
      MaxCompressorTurnOffCountPerHour: '',
      MaxObservationTime: '',
      OptimizationTime: '',
      SteadyStateRoomTemperatureTolerance: '',
      SteadyStateCoilTemperatureTolerance: '',
      SteadyStateSamplingDuration: '',
      DeltaT: '',
      MinAirConditionerOffDuration: '',
      AirConditionerOffDeclarationMinPeriod: '',
      GatewayUploadingRate: '',
      thermostateInterval: '',
      thermostateTimeIncrease: '',
    });

    return response.data;
  
      
  }

  return (
    <div>

        <div

         onClick={sendData}
          style={{ backgroundColor: "#40b9d6" , width:"190%", height:"100%",borderRadius:'50%',display:'flex', justifyContent:"center", alignItems:'center',boxShadow:"none" }}>

          <p ><FaPowerOff  size='35'/></p>
      
      </div>
    </div>
  );
}
