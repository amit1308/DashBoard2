import React from "react";
import "./Card.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularPro from "../CircularPro/CircularPro";
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
  // const Png = icons[param.id];
  return (
    <div className="CompactCard color-blue">
      <div className="dataAndphase">
        <p>Compressor Data</p>
      </div>
      <div className="Progressbar">
        <div>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              textColor: "red",
              pathColor: "red",
              trailColor: "white",
            })}
            // backgroundPadding={2}
            // background={true}
            value={param.RoomTemperature}
            // text={param.RoomTemperature}
          />
          <div>
            <h4>Room Temp.</h4>
          </div>
          <div style={{marginTop:"-17%", textAlign: "center" }}>
            <h4>{param.RoomTemperature}</h4>
          </div>
        </div>

        <div>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              textColor: "red",
              pathColor: "violet",
              trailColor: "white",
            })}
            value={param.CoilTemperature}
            // text={param.CoilTemperature}
          />
          <div>
            <h4>Coil Temp.</h4>
          </div>
          <div style={{ marginTop:"-17%",textAlign: "center" }}>
            <h4>{param.CoilTemperature}</h4>
          </div>
        </div>

        <div>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              // textColor: "red",
              pathColor: "green",
              trailColor: "white",
            })}
            value={param["Humidity(%)"]}
            // text={` ${param["Humidity(%)"]}%`}
          />
          <div>
          <h4>Humidity</h4>
          </div>
          <div style={{marginTop:"-17%", textAlign: "center" }}>
        
            <h4>{` ${param["Humidity(%)"]}%`}</h4>
          </div>
        </div>

        <div>
          <CircularPro />
          <div style={{ textAlign: "center" }}>
            {/* <h4>By Pass</h4> */}
            <p style={{color:"#072635"}}>.</p>
            <p style={{color:"#072635"}}>.</p>
          </div>
          <div style={{ textAlign: "center" }}></div>
        </div>

        {/* <h3 style={{ marginBottom: 0 }}>{` ${param['Time']}`}</h3> */}
      </div>
    </div>
  );
}

export default Card;
