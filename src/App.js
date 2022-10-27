// Import React for components:
import React from 'react'
import Content from './Components/Component/index';
import './App.css';
import Header from './Components/Header';
import Article from './Components/Article';
import Characters from './Components/Characters';
// Change the function to class, add in a render method with the curly brackets.
class App extends React.Component {

  changeTitle = (title) => {
    document.title = title;
  }
  render(){
  return (
    <>
    <Header greeting = "world" />
    <Characters/>
    <Content changeTitle={this.changeTitle} />
    <Article/>
    </>
  );
  }
}


export default App;
