import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import styles from "./homeScreen.module.css";
import axios from 'axios';
function HomeSlider() {

  const [pictures,setPictures] =useState([])

  useEffect(() => {
 axios.get("/api/home").then((res)=>{
  setPictures(res.data.SliderItems);
 
 })
  }, [])

  return (
    
    <>
      <Splide
        options={{
          perPage: 3,
          autoplay: "boolean" ,
           pause :false,
           breakpoints: {
            1200:{
              perPage:3
            },
            992: {
              perPage:2
          
            },
            640:{
              perPage:1
            }
          },
          height:"50vh",
           
        }}
        className={styles.headerSplide}
        aria-label="My Favorite Images"
      >
        {pictures.map((slider)=>(

        <SplideSlide  key={slider.id}>
          <img
            src={slider.image}
            height="500vh"
         width="90%"
          
            alt="Image 1"
          />
        </SplideSlide>
        ))}
       
      </Splide>
    </>
  );
}

export default HomeSlider;
