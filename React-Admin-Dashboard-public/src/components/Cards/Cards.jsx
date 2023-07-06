import React, { useEffect, useState } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import axios from "axios";
import Ph1Card from "../Card/Ph1Card";
import Ph2Card from "../Card/Ph2Card";
import Ph3Card from "../Card/Ph3Card";
import ProgressCard from "../Card/ProgressCard";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
// import Graph from "../Card/Graph";

const Cards = () => {
  const [toShow, setToShow] = useState(cardsData);
  const opti = useSelector((state) => {
    console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
    return state.gatewayOptimizer.OptimizerId;
  });

  useEffect(() => {
  
    if(!opti)
      setToShow(cardsData)
   

  }, [opti]);



  async function dataopti(OptimizerId, GatewayId) {
    const response = await axios.post(
      "http://3.86.109.81:5000/getLatestData",{
        GatewayId,
        OptimizerId,
      }
    );
    setToShow([response.data])
    return response.data;
    console.log( "Ramsiya",response.data);
  }

  return (
    <div>
      
      <Heading dataopti={dataopti} />
      {/* { (gate && opti)?<Cards /> : <h1>Please Select GatewayId and OptimizerId</h1>} */}
      
      {toShow?.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <div className="flex-direction-row">
              <ProgressCard data={card} />
              <Card data={card} />
              {/* <Graph data={Graph} /> */}
            </div>
            <div className="flex-direction-row">
              <Ph1Card data={card} />
              <Ph2Card data={card} />
              <Ph3Card data={card} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
