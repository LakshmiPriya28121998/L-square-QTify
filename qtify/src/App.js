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

  const [topalbums,setTopalbums] = useState([])
let stateProduct = [[{_id :1 ,image : "/static/images/cards/contemplative-reptile.jpg", }],[{_id :12 ,image : "/static/images/cards/contemplative-reptile.jpg", }],[{_id :13 ,image : "/static/images/cards/contemplative-reptile.jpg", }],[{_id :14 ,image : "/static/images/cards/contemplative-reptile.jpg", }]]

useEffect(() => {
  performAPICall()
},[])



const performAPICall = async () => {

    let result = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
    console.log(result)
    setTopalbums(result.data)
}

  return (
    <div className="App">

      <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topalbums} type="album" />

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