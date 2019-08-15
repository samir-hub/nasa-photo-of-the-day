import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"


import "./PhotoCard.scss"
import NewPlanetForm from "./NewPlanetForm";
import { Header, Image, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';




export default function PhotoGrid() {
  const [data, setData] = useState([]);
//   const [date, setDate] = useState();
//   const [exp, setExp] = useState([]);
//   const [title, setTitle] = useState([]);
      const [activeItem, setActiveItem] = useState({});


let api = `https://api.nasa.gov/planetary/apod?api_key=rg8vomTgToxcqAVlRSGrnb0bVMuKhj3qO4571P4W&date=2011-09-08`



  useEffect(() => {
    axios
      .get(api)
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
          <Header as='h2'>
            <Image circular src='https://img.timesnownews.com/story/1532949394-NASA_official_Logo.jpg?d=1200x900' /> NASA Photo of the Day
          </Header>
          <Menu inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={() => setActiveItem(activeItem)} />
        <Menu.Item
          name='messages'
          active={activeItem === 'Images'}
          onClick={() => setActiveItem(activeItem)}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'Blog'}
          onClick={() => setActiveItem(activeItem)}
        />
      </Menu>
        <PhotoCard imgUrl = {data.hdurl} imgDate = {data.date} imgExp = {data.explanation} imgTitle = {data.title}/>
        {/* <NewPlanetForm/> */}
      </div>
    </div>
  );
}