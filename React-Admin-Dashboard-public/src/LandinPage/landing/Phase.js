import React from 'react';
import Speedometer from 'react-d3-speedometer';
import './Phase.css'

const Phase = ({ data }) => {
  return (
      <div >
          <CompactCard param={data} />
      </div>
  );
};

function CompactCard({param}) {
    

  return (
    <div style={{display:"flex", flexDirection:"row" , }}>
    <div className="layout-container color-change">
        <h4 >Phase 1 Data</h4>
    <div className="top-row" style={{margin:"-20px",paddingRight:"10px"}}>
      <div className="speedometer">

        <Speedometer
        width={160}
        height={130}
          maxValue={100}
          value={`${param['Ph1Current(A)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
          currentValueText=""
          valueTextFontSize='0px'
          labelFontSize="0px"
            segments ={1}
            ringWidth={25}
            needleHeightRatio={0.7}
        />
              <h4 className="speedometer-label">Current</h4>

      </div>
      <div className="speedometer">
        <Speedometer
          width={160}
          height={130}
            maxValue={100}
            value={`${param['Ph1ActivePower(kW)']}`}
            needleColor="#6de3e7"
            startColor="#40b9d6"
            endColor="#40b9d6"
            currentValueText=""
            valueTextFontSize='0px'
            labelFontSize="0px"
              segments ={1}
              ringWidth={25}
              needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Active Power</h4>

      </div>
    </div>
    <div className="middle-row">
      <div className="speedometer">
        <Speedometer
        width={200}
        height={200}
          maxValue={100}
          value={`${param['Ph1Voltage(V)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
            currentValueText=""
            
            valueTextFontSize='0px'
            labelFontSize="0px"
            segments ={1}

            segmentColors={[]}
            ringWidth={30}
            needleHeightRatio={0.7}

        />
              <h4 className="speedometer1-label">Voltage</h4>

      </div>
    </div>
    <div className="bottom-row">
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={50}
           value={`${param['Ph1ApparentPower(kVA)']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Apparent Power</h4>
      </div>
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={10}
           value={`${param['Ph1PowerFactor']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Power Factor</h4>
      </div>
    </div>
  </div>


  <div className="layout-container color-change">
  <h4 >Phase 2 Data</h4>
    <div className="top-row" style={{margin:"-20px",paddingRight:"10px"}}>
      <div className="speedometer">

        <Speedometer
        width={160}
        height={130}
          maxValue={100}
          value={`${param['Ph2Current(A)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
          currentValueText=""
          valueTextFontSize='0px'
          labelFontSize="0px"
            segments ={1}
            ringWidth={25}
            needleHeightRatio={0.7}
        />
              <h4 className="speedometer-label">Current</h4>

      </div>
      <div className="speedometer">
        <Speedometer
          width={160}
          height={130}
            maxValue={100}
            value={`${param['Ph2ActivePower(kW)']}`}
            needleColor="#6de3e7"
            startColor="#40b9d6"
            endColor="#40b9d6"
            currentValueText=""
            valueTextFontSize='0px'
            labelFontSize="0px"
              segments ={1}
              ringWidth={25}
              needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Active Power</h4>

      </div>
    </div>
    <div className="middle-row">
      <div className="speedometer">
        <Speedometer
        width={200}
        height={200}
          maxValue={100}
          value={`${param['Ph2Voltage(V)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
            currentValueText=""
            valueTextFontSize='0px'
            labelFontSize="0px"
            segments ={1}

            segmentColors={[]}
            ringWidth={30}
            needleHeightRatio={0.7}

        />
              <h4 className="speedometer1-label">Voltage</h4>

      </div>
    </div>
    <div className="bottom-row">
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={100}
           value={`${param['Ph2ApparentPower(kVA)']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Apparent Power</h4>
      </div>
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={100}
           value= {`${param['Ph2PowerFactor']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Power Factor</h4>
      </div>
    </div>
  </div>


  <div className="layout-container color-change">
  <h4 >Phase 3 Data</h4>
    <div className="top-row" style={{margin:"-20px",paddingRight:"10px"}}>
      <div className="speedometer">

        <Speedometer
        width={160}
        height={130}
          maxValue={100}
          value= {`${param['Ph3Current(A)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
          currentValueText=""
          valueTextFontSize='0px'
          labelFontSize="0px"
            segments ={1}
            ringWidth={25}
            needleHeightRatio={0.7}
        />
              <h4 className="speedometer-label">Current</h4>

      </div>
      <div className="speedometer">
        <Speedometer
          width={160}
          height={130}
            maxValue={100}
            value={`${param['Ph3ActivePower(kW)']}`}
            needleColor="#6de3e7"
            startColor="#40b9d6"
            endColor="#40b9d6"
            currentValueText=""
            valueTextFontSize='0px'
            labelFontSize="0px"
              segments ={1}
              ringWidth={25}
              needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Active Power</h4>

      </div>
    </div>
    <div className="middle-row">
      <div className="speedometer">
        <Speedometer
        width={200}
        height={200}
          maxValue={100}
          value= {`${param['Ph3Voltage(V)']}`}
          needleColor="#6de3e7"
          startColor="#40b9d6"
          endColor="#40b9d6"
            currentValueText=""
            valueTextFontSize='0px'
            labelFontSize="0px"
            segments ={1}

            segmentColors={[]}
            ringWidth={30}
            needleHeightRatio={0.7}

        />
              <h4 className="speedometer1-label">Voltage</h4>

      </div>
    </div>
    <div className="bottom-row">
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={100}
           value= {`${param['Ph3ApparentPower(kVA)']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Apparent Power</h4>
      </div>
      <div className="speedometer">
        <Speedometer
         width={160}
         height={130}
           maxValue={100}
           value={`${param['Ph3PowerFactor']}`}
           needleColor="#6de3e7"
           startColor="#40b9d6"
           endColor="#40b9d6"
           currentValueText=""
           valueTextFontSize='0px'
           labelFontSize="0px"
             segments ={1}
             ringWidth={25}
             needleHeightRatio={0.7}

        />
              <h4 className="speedometer-label">Power Factor</h4>
      </div>
    </div>
  </div>


</div>
  );
}

export default Phase;
