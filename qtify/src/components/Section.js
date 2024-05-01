import { useEffect, useState } from "react";
import styles from "./Section.module.css"
import Filters from "./Filters.js"
import { CircularProgress } from "@mui/material";
import {
    Grid
  } from "@mui/material";
  import axios from "axios";
  import QtifyCard from "./QtifyCard";
  import Carousel from "./Carousel.js"

export default function Section({ title , data, filterSource, type}) {
    if(type === "song"){
        console.log(filterSource,"from section")
    }
 
    const[filters, setFilters] = useState([{key:"all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    } 

    const fetchFilters = async () => {
  const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
  return response.data;
}


    useEffect(() => {
        if(type === "song"){
            fetchFilters().then((response) => {
                const {data} = response;
                console.log(data);
                console.log(filters)
                let abc = [...filters,...data]
                setFilters([abc]);
            })
            console.log("type is song")
            console.log(filters)
            // const {data} = filterSource;
            // setFilters([...filters, ...data]);
        }
    },[])

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) => 
showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key : card );


    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!(type === "song") &&  <h4 className={styles.toggletext} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>} 
                
            </div>
       

         { (type === "song") && (
            <div>
                <Filters filters={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilteredIndex={setSelectedFilterIndex} />
            </div>
        )} 

        {data.length ===0 ? (
            <CircularProgress />
        ) : (
            <div>
                {!carouselToggle ? (
                    <Grid container spacing={2}>
                    {cardsToRender.map((product) => ( 
                                <Grid key={product.id} item lg={2}>
                                  <QtifyCard 
                                    qtifycard={product} type={type}
                                  />
                                </Grid>
                              ))}
                    </Grid> 
                ) : (
                
                // <div> corousel </div>
                // <Grid container spacing={2}>
                <Carousel data={data} renderComponent={(data) => <QtifyCard 
                    qtifycard={data} type={type} /> } />
                    //   </Grid>
                
                )}
            </div>
        )}

    </div>
    )

}