import React from "react";
import Chart from "react-apexcharts";
import './BarChart.css'

function Barchart() {
  return (
    <div className="container-fluid1">
      <React.Fragment>
        <div className="container-fluid">
          <Chart
            type="bar"
            width={1200}
            height={700}
            series={[
                
              {
                name: "Money Spent",
                data: [400, 300, 750, 350, 200,],

              },
            ]}

            /* working on an overlay
            
            seriesb={[
              <div className='chart2'>
              {
                name: "Budget",
                data: [500, 500, 500, 500, 500,],

              },
            </div>
            ]}*/

            options={{
              title: {
                text: "June 2022",
                style: { fontSize: 30, textalign: 'center' },
                
              },

            /*  subtitle: {
                text: "This is BarChart Graph",
                style: { fontSize: 18 },
              },
          */

              colors: ["#86B2CE"],
              theme: { mode: "light" },
      
              xaxis: {
                tickPlacement: "on",
                categories: [
                  "Groceries",
                  "Education",
                  "Food", 
                  "Fun",
                  "Other Expenses",
                ],
                title: {
                  text: "Budget Categories",
                  style: { color: "#004977", fontSize: 30 },
                },
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "20", colors: ["#004977"] },
                },
                title: {
                  text: "Cost($)",
                  style: { color: "#004977", fontSize: 20 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 20,
                },
              },
            }}
          ></Chart>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Barchart;