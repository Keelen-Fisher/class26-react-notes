// Import React for components:
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Component from './Components/Component/index';
import './App.css';
import Header from './Components/Header';
import Article from './Components/Article';
import List from './Components/List'
import Content from './Components/Content/index';
// Change the function to class, add in a render method with the curly brackets.
function App() {

  const changeTitle = (title) => {
    document.title = title;
  }


  const [name, setName] = useState('World, Click!');
  const [pokemonList, setPokemonList] = useState([]);
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {

    console.log('An event occurred!')
  });

  useEffect( () => {
    console.log('something happened ONCE when mounted')
    async function apiCall(){
      let pokemonResults = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonList(pokemonResults.data.results)
    }
    apiCall();
  }, []);

  useEffect(() => {
    console.log('name was updated');
  }, [name]);
  // Caution!!! If running any kind of mutation, this would seen a recursive action
  return (
    <>

      <h1 onClick={() => setName('You')}>Hello {name}</h1>
      <button onClick={() => setShowContent(!showContent)}>Show Content</button>
      <List list={pokemonList} />
      <Content/>
      <Header greeting="world" />
      <Component changeTitle={changeTitle} />
      <Article />
    </>
  );

}


export default App;
