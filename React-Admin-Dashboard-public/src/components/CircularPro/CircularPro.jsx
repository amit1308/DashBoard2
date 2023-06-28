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
    const response = await axios.post("http://44.211.198.14/toggleOptimizer",{
        GatewayId: "Amit",
        OptimizerId: "Hello",
        toggle:"false"
      });
      // console.log(response.data);
  }

  return (
    <div>
      <div
        style={{
          width: "90px",
          height: "90px",
          border: "solid red 10px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div

         onClick={sendData}
          style={{ backgroundColor: "#413e3e" , width:"100%", height:"100%",borderRadius:'50%',display:'flex', justifyContent:"center", alignItems:'center',boxShadow:"none" }}>
        {/* <button style={{ backgroundColor: "#413e3e" }}>By Pass</button> */}
          <p><FaPowerOff /></p>
        </div>
      </div>
    </div>
  );
}
