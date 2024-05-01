import React, {useEffect, useState} from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import RightArrow from "../assets/next.png";

export default function Carouselrightnavigation() { 
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function (){
            setIsEnd(swiper.isEnd);
        })
    },[])

    return (
        <div>
            
            {!isEnd && <img src={RightArrow} alt="logo" width={67} onClick={() => swiper.slideNext()}  />}
        </div>
    )
}