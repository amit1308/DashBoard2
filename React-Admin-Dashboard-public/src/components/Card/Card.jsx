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

            <div className="graphBtns">
        <Graph />

                {/* <Button variant="contained"   sx ={buttonstyle}  >

                    <span  className="blockspan1" >
                    Room Temperature
                    </span>
                    <span className="blockspan2"></span>
                    <span className="blockspan3">
                    {`${param['RoomTemperature']}`}
                    </span>

                </Button>
         
                <Button variant="contained" sx ={buttonstyle}>

                    <span className="blockspan1">
                        Coil Temperature
                    </span>
                    <span className="blockspan2"></span>
                    <span className="blockspan3">
                        {`${param['CoilTemperature']}`}
                    </span>
                </Button>

      
                <Button variant="contained"  sx ={buttonstyle}>

                    <span className="blockspan1">
                        Humidity(%)
                    </span>
                    <span className="blockspan2"></span>
                    <span className="blockspan3">
                        {`${param['Humidity(%)']}`}
                    </span>
                </Button> */}
            </div>
        </div>
    );
}

export default Card;
