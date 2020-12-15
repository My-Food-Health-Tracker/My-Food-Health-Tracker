import React from 'react'
import { LineChart, PieChart } from 'react-chartkick'
import { useState, useEffect } from "react";
import axios from 'axios';
// import { DataContext } from "./contexts/DataContext";

export default function RealData(props) {
  // console.log(props.user)
  const [userData, setUserData] = useState([])
  const [user, setUser] = useState(props.user)
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`/api/users/${user}`,
        );
        setUserData(result.data);
      };
      fetchData();
    }, []);
    
  let pieData = []
  let lineData = {}
  let colors={}
  // console.log(userData)

  return (
    <div className="charts">
    <h3>Foods associated with strong symptoms</h3>
    <PieChart colors={colors} data={pieData} height="80vh" legend="right"/>
    <h3>Habits and food suspect over time</h3>
    <LineChart data={lineData} height="80vh" legend="right"/>
  </div>
  )
}
