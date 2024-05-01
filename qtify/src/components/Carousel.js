import React, {useEffect, useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import Carouselleftnavigation from "./Carouselleftnavigation.js";
import Carouselrightnavigation from "./Carouselrightnavigation.js";
import {
    Grid
  } from "@mui/material";
import styles from "./Carousel.module.css"

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);

    return <></>;
};

export default function Carousel({ data , renderComponent}) {
    return (
        <Grid container spacing={2}>
        <div className={styles.carouseldiv}> 
        {/* <Grid container spacing={2}> */}
        {/* <Grid key={data._id} item lg={2}> */}

        <Swiper style={{padding: "0px 20px"}}
        initialSlide={0}
        modules={{Navigation}}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        >
             
            <Controls data={data} />
            <Carouselleftnavigation />
            <Carouselrightnavigation />
            
             {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>)) } 
            
        </Swiper>
      {/* </Grid> */}
         </div> 
         </Grid>
    )
}