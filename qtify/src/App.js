// import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QtifyCard from './components/QtifyCard';
import {
  Grid
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from './components/Section';

function App() {

  const [topalbums,setTopalbums] = useState([]);
  const [newalbums,setNewalbums] = useState([]);
  const [songs,setSongs] = useState([]);
  // const [fetchFilters, setFetchFilters] = useState([]);

useEffect(() => {
  performAPICall()
},[])


// const fetchFilters = async () => {
//   const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
//   return response.data;
// }



const performAPICall = async () => {

    let result1 = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
    console.log(result1)
    setTopalbums(result1.data)
    let result2 = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
    setNewalbums(result2.data)
    let result3 = await axios.get("https://qtify-backend-labs.crio.do/songs");
    setSongs(result3.data);
    // let result4 = await axios.get("https://qtify-backend-labs.crio.do/genres");
    // setFetchFilters(result4.data);
}

  return (
    <div className="App">

      <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topalbums} type="album" />
      <Section title="New Albums" data={newalbums} type="album" />
      <Section title="Songs" data={songs}  type="song" />
      {/* <Grid container spacing={2}>
      {topalbums.map((product) => ( 
                  <Grid key={product._id} item lg={2}>
                    <QtifyCard 
                      qtifycard={product} type="album"
                    />
                  </Grid>
                ))}
      </Grid> */}
      
      </StyledEngineProvider>
      
    </div>
  );
}

export default App;