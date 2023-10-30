import React from "react";
import "./Landing.css";
import "react-circular-progressbar/dist/styles.css";

import Graph from "./Graph";
// parent Card
const Card = ({ data }) => {
    return (
        <div className="cardSize">
            <CompactCard param={data} />
        </div>
    );
};

// Compact Card
function CompactCard({ param }) {
    return (
        <div  >


        
        <Graph />

           
        </div>
    );
}

export default Card;
