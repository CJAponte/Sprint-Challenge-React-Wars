import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters"
import { Header, Container } from "semantic-ui-react";
import Loader from 'react-loader-spinner'


function App() {
  const [starwarsChars, setStarWarsChars] = useState([])


  useEffect(() => {
    axios
      .get(
        "https://swapi.co/api/people/"
      )
      .then(res => setStarWarsChars(res.data.results))
      .catch(error => console.log(error))
  }, [])

  function dataLoading(){
    if(starwarsChars.length > 0){
      return (
        <Container className="App">
          <Header size="huge"> React Wars </Header>
          <Characters starwarsChars={starwarsChars} />
        </Container>
      )
    } else {
      return (
        <div className="loader"> 
          <Loader type="Circles" color="#1f2a38" height="80" width="80" />
          <Header size='huge'>Loading Data</Header>
        </div>
      )
    }

  }

    return (
        dataLoading()
    );

}


export default App;
