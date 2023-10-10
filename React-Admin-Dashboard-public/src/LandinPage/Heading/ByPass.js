import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaBeer,FaPowerOff } from 'react-icons/fa';
// import { motion } from "framer-motion";

export default function CircularPro() {
 const [byPassData,setByPassData] = useState([]);
  const opti = useSelector((state) => {
    // console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
    return state.gatewayOptimizer.OptimizerId;
  });
  const gate = useSelector((state) => {
    // console.log("Graph        G", state.gatewayOptimizer.GatewayId);
    return state.gatewayOptimizer.GatewayId;
  });

  async function sendData(){
    const response = await axios.post("http://192.168.1.5:8080/toggleOptimizer",{
        // GatewayId: "Amit",
        // OptimizerId: "Hello",
        // toggle:"false"
      });
      console.log("ToggleOptimizer",response.data);
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
