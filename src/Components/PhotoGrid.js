import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

import "./PhotoCard.css"

export default function PhotoGrid() {
  const [data, setData] = useState([]);
//   const [date, setDate] = useState([]);
//   const [exp, setExp] = useState([]);
//   const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=rg8vomTgToxcqAVlRSGrnb0bVMuKhj3qO4571P4W&date=2015-03-14`)
      .then(response => {
        const data = response.data;
        console.log(response);
        setData(data);
      })
    //   .then(response => {
    //     const date = response.data.date;
    //     console.log(response);
    //     setDate(date);
    //   })
  }, []);

  return (
    <div className="container">
      <div className="entry">
        {/* {data.map(petUrl => {
          return <PhotoCard key={petUrl} imgUrl={petUrl} />;
        })} */}
        <PhotoCard imgUrl = {data.hdurl} imgDate = {data.date} imgExp = {data.explanation} imgTitle = {data.title}/>
      </div>
    </div>
  );
}