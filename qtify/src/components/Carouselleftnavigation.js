import React, {useEffect, useState} from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import LeftArrow from "../assets/pr.png";

export default function Carouselleftnavigation() { 
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function (){
            setIsBeginning(swiper.isBeginning);
        })
    },[])

    return (
        <div>
            
            {!isBeginning && <img src={LeftArrow} alt="logo" width={67} onClick={() => swiper.slidePrev()}  />}
        </div>
    )
}