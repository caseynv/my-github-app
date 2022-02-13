import React, {Component} from 'react';

import './App.css';
import Header from './Header';
import CardList from './CardList';
import Form from './Form';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook", email: "danAbramov@gmail.com"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "@facebook",  email: "danAbramov@gmail.com"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "@facebook",  email: "danAbramov@gmail.com"},
];

class App extends React.Component{
  state = {
      profiles: testData,
  }
  render() {
    return (
      <div>
        <Header title="The Github Cards App"></Header>
        <Form />
        <CardList profiles={this.state.profiles}></CardList>
      </div>
    );
  }
}
export default App;
