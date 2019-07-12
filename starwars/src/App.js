import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters"
import { Header, Container } from "semantic-ui-react";

function App() {
  const [starwarsChars, setStarWarsChars] = useState([])


  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }

  useEffect(() => {
    axios
      .get(
        "https://swapi.co/api/people/"
      )
      .then(res => setStarWarsChars(res.data.results))
      
      .catch(error => console.log(error))
  }, [])

  console.log('wow', starwarsChars)
    return (
      <Container className="App" style={{border: "1px solid black"}}>
        <Header size="huge"> React Wars </Header>
        <Characters starwarsChars={starwarsChars} />
      </Container>
    );
  }


export default App;
