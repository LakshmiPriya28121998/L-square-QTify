import { useEffect, useState } from "react";
import styles from "./Section.module.css"
import Filters from "./Filters.js"
import { CircularProgress } from "@mui/material";
import {
    Grid
  } from "@mui/material";

  import QtifyCard from "./QtifyCard";
  import Carousel from "./Carousel.js"

export default function Section({ title , data, filterSource, type}) {
    console.log(data,"from section")
    const[filters, setFilters] = useState([{key:"all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    ;}

    // useEffect(() => {
    //     if(filterSource){
    //         filterSource().then((response) => {
    //             const {data} = response;
    //             setFilters([...filters, ...data]);
    //         })
    //     }
    // },[])

//     const showFilters = filters.length > 1;
//     const cardsToRender = data.filter((card) => 
// showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key : card );


    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggletext} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>
            </div>
       

        {/* {showFilters && (
            <div>
                <Filters filters={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilteredIndex={setSelectedFilterIndex} />
            </div>
        )} */}

        {data.length ===0 ? (
            <CircularProgress />
        ) : (
            <div>
                {!carouselToggle ? (
                    <Grid container spacing={2}>
                    {data.map((product) => ( 
                                <Grid key={product._id} item lg={2}>
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