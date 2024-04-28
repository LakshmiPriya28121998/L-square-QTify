import React from "react";
import heroimage from "../assets/hero.png";
import styles from "./Hero.module.css"

export default function Hero() {
    return(
        <div className={styles.hero}>
            {/* <div className={styles.herodiv}> */}
            <p>100 Thousand Songs, ad-free" and “Over thousands podcast episodes</p>
            <img src={heroimage} alt="headphone" width={212} height={212} />
            {/* </div> */}
            
        </div>
    )

}