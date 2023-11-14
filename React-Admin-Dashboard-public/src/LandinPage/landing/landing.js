import React, { useEffect, useState } from "react";
import "./Landing1.css";
import { cardsData } from "../../Data/Data";
import axios from "axios";
import Phase from "../landing/Phase";

import ProgressCard from "../landing/Progresscard";
import Heading from "../Heading/Heading";

import { useSelector } from "react-redux";

import Graph from "../landing/GraphHold";

const Landing = () => {
  const [toShow, setToShow] = useState(cardsData);
  const opti = useSelector((state) => {
    // console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
    return state.gatewayOptimizer.OptimizerId;
  });

  useEffect(() => {
  
    if(!opti)
      setToShow(cardsData)
   

  }, [opti]);



  async function dataopti(OptimizerId, GatewayId) {
    const response = await axios.post(
      "http://3.106.217.161:5000/getLatestData",{
        GatewayId,
        OptimizerId,
      }
    );
    setToShow([response.data])
    return response.data;
   
  }

  return (
    <div>
      
      <Heading dataopti={dataopti} />

      
      {toShow?.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
           
            <div className="flex-direction-row">
              <Phase data={card} />
             
            </div>

            <div className="flex-direction-row">
            <Graph data={card} />
              <ProgressCard data={card} />
        
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
