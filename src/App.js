import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { createChart } from "lightweight-charts";
import ApexCharts from "./ApexCharts";

function App() {
  const [category, setCategory] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  useEffect(() => {
    const apiCaller = async () => {
      const response = await axios.get("http://localhost:9000/coins/BTCINR");
      // console.log(response.data);

      setCategory(response.data["time"]);
      setSeriesData(response.data["buy"]);
    };
    apiCaller();
  }, []);
  return (
    <div>
      <ApexCharts category={category} seriesData={seriesData} />
    </div>
  );
}

export default App;
