import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

function GetDate() {
  return Math.trunc(Math.random() * 1000);
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => GetDate()),
      borderColor: "#006CE0",
    },
  ],
};

export default function App() {
  const [selects, setSelects] = useState(new Array(8).fill(false));

  useEffect(() => {
    fetch(
      "http://localhost:3000/data",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
       setChartData(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleButtonClick = (index) => {
    const newSelects = new Array(8).fill(false);
    newSelects[index] = true;
    setSelects(newSelects);
  };

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div className="buttons mb-12 mt-12 text-center flex items-center justify-center gap-4">
        {[...Array(8)].map((_, index) => (
          <button 
            key={index} 
            onClick={() => handleButtonClick(index)} 
            className={`transition rounded-2xl text-[#5C667B] btn-[#0071EB] px-4 py-1 hover:bg-[#005BBC] hover:text-white ${selects[index] ? "bg-[#0071EB] text-white" : ""}`}>
            {index === 0 ? "1D" : `${index}Y`}
          </button>
        ))}
      </div>
      <div className="mx-auto">
        <Line options={options} height={100} data={data} />
      </div>
    </div>
  );
}
