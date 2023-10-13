import "../Kwh/Table.css";

import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { toast } from "react-toastify";

function App({ tableD }) {
  const [fakeData, setFakedata] = useState([]);
  const [selectedOption, setSelectedOption] = useState( );
  const options = [1, 2, 3, 4, 6, 8, 12];
  useEffect(() => {
   
    setFakedata(tableD?.data);
    // setFakedata(tableD?.data?.data);
  }, [tableD]);

  
  const data = React.useMemo(() => fakeData, [fakeData]);
  console.log(data, "showTableData");
  // const timeOptions = [1, 2, 3, 4, 6, 8, 12, "this"];

  const filteredData = useMemo(() => {

    if(!data){
      return [];
    }
    if (selectedOption === 0 ) {
      return data;
    }


    return data.filter((item, index) => index % selectedOption === 0);
  }, [selectedOption]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Date(s)",
        accessor: "Date",
      },
      {
        Header: () => {
          //  const [selectedOption, setSelectedOption] = useState(1);
          return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>Time Interval</div>
            <div style={{ marginLeft: "5px" }}>
              <select
                // sx={{margin:'4px',color:"red"}}
                value={selectedOption}
                onChange={(e) => {
                  console.log("value", e.target.value);
               
                

                    setSelectedOption(e.target.value);
              
                }}
              >
             
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )},
        accessor: "Time",
      },

      {
        Header: "KWH",
        accessor: "kwh",
      },
      // {
      //   Header: "Consumption kwh",
      //   accessor: "Consumption",
      // },
      {
        Header: "KVAH",
        accessor: "kvah",
      },
      // {
      //   Header: "Consumption kvah",
      //   accessor: "consumption",
      // },
      {
        Header: "PF",
        accessor: "meterID",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData });

  return (
    <div className="App">
      {/* <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}

      <div className="containertable">
        <table className="sticky-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="header" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="center" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>{/* <h1>{pageNumber}</h1> */}</div>
      </div>
    </div>
  );
}

export default App;
