import React from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colors } from "@mui/material";
import { buttonstyle } from "./style";
// parent Card

const Card = ({ data }) => {
    return (
        <div className="cardSize1">
            <CompactCard param={data} />
        </div>
    );
};

// Compact Card
function CompactCard({ param }) {
    // const Png = icons[param.id];
    return (
        <>
            <div
                className="CompactCard1 color-blue"
                layoutId="expandableCard"
            >
                <div className="dataAndphase">
                <h2 >Phase2 Data</h2>
              
                {/* <span>{`Date: ${param['Date']}`}</span> */}

                </div>

                <div className="btns">
                {/* <Stack spacing={2} direction="row" style={{ width: "100%" }}> */}
                    <Button variant="contained" sx ={buttonstyle}>
                        
                        <span className="blockspan1">
                        Voltage
                        </span>
                        <span className="blockspan2"></span>
                        <span className="blockspan3">
                        {`${param['Ph2Voltage(V)']}`}
                        </span>
                    
                        </Button>
                        <Button variant="contained" sx ={buttonstyle}>
                        
                        <span className="blockspan1">
                        Current
                        </span>
                        <span className="blockspan2"></span>
                        <span className="blockspan3">
                        {`${param['Ph2Current(A)']}`}
                        </span>
                        </Button>

                {/* </Stack> */}
                {/* <Stack spacing={2} direction="row" style={{ width: "100%",marginTop:"1%" }}> */}
                    <Button variant="contained" sx ={buttonstyle}>
                        
                        <span className="blockspan1">
                        ActivePower
                        </span>
                        <span className="blockspan2"></span>
                        <span className="blockspan3">
                        {`${param['Ph2ActivePower(kW)']}`}
                        </span>
                    
                        </Button>
                        <Button variant="contained" sx ={buttonstyle}>
                        
                        <span className="blockspan1">
                        Power Factor
                        </span>
                        <span className="blockspan2"></span>
                        <span className="blockspan3">
                        {`${param['Ph2PowerFactor']}`}
                        </span>
                        </Button>

                {/* </Stack> */}
                {/* <Stack spacing={2} direction="row" style={{ width: "100%" ,marginTop:"1%" }}> */}
                <Button variant="contained" sx ={buttonstyle}>
                        
                        <span className="blockspan1">
                      Apparent Power
                        </span>
                        <span className="blockspan2"></span>
                        <span className="blockspan3">
                        {`${param['Ph2ApparentPower(kVA)']}`}
                        </span>
                        </Button>
 

                {/* </Stack> */}
                </div>
                <div className="radialAndDetail">

                
                    <div className="detail">
                        {/* <Png /> */}
                        
                        {/* <span>{` ${param['Time']}`}</span> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
