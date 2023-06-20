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
// import Graph from "../Card/Graph";

const Cards = () => {
  const [toShow, setToShow] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get("http://localhost:5000/data");
      setToShow(response.data);
    };
    getCharacters();
  }, []);

  async function dataopti(OptimizerId, GatewayId) {
    const response = await axios.post(
      "http://16.170.208.48/getLatestData",{
        GatewayId,
        OptimizerId,
      }
    );
    setToShow([response.data])
    return response.data;
    // console.log(response.data);
  }

  return (
    <div>
      <Heading dataopti={dataopti} />
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
