import React from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import Button from '@mui/material/Button';
import { buttonstyle } from "./style";
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
        <div
        className="CompactCard color-blue"
        >

            {/* <div className="dataAndphase">
                <p>Compressor Data</p>
            </div> */}

        
        <Graph />

           
        </div>
    );
}

export default Card;
