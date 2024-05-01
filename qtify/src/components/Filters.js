import React, {useEffect, useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div 
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
                {value === index &&  (
                    <Box sx={{ p : 3 }} >
                    <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
}


export default function Filters({ filters , selectedFilterIndex, setSelectedFilteredIndex}) {

    console.log(filters)
    
    const handleChange = (event, newValue ) => {
        setSelectedFilteredIndex(newValue);
    }

    function allyProps(index) {
        return {
            id : `simple-tab-${index}`,
            "aria-controls" : `simple-tabpanel-${index}`,
        };
    }


    return (

            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
            value={selectedFilterIndex}
            onChange={handleChange}
            aria-label="basic-tabs-example"
            TabIndicatorProps={{
                style : {
                    backgroundColor : "var(--color-primary)"
                },
            }}
            >
                {filters.map((ele,idx) => (
                    <Tab label={ele.label} {...allyProps(idx)} />
                ))}
            </Tabs>
            </Box>

            {filters.map((ele,idx) => (
                <TabPanel value={selectedFilterIndex} index={idx} >{ele.label}</TabPanel>
            ))}
            </Box>
       
    )


}

