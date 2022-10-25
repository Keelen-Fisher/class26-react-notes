// Import React for components:
import React from 'react'
import Content from './Components/Component/index';
import './App.css';
import Header from './Components/Header';
import Article from './Components/Article';
import Counter from './Components/Counter'
import Welcome from './Components/Welcome'

// Change the function to class, add in a render method with the curly brackets.
class App extends React.Component {

  changeTitle = (title) => {
    document.title = title;
  }
  render(){
  return (
    <>
    <Header greeting = "world" />
    <Content changeTitle={this.changeTitle} />
    <Welcome/>
    <Counter/>
    <Article/>
    </>
  );
  }
}


export default App;
