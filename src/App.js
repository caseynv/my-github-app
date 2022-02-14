import React, {Component} from 'react';

import './App.css';
import Header from './Header';
import CardList from './CardList';
import Form from './Form';

const testData = [];

class App extends Component{
  state = {
    profiles: testData,
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles : [...prevState.profiles, profileData]
    }))
  };

  render() {
    return (
      <div>
        <Header title="The Github Cards App"></Header>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}></CardList>
      </div>
    );
  }
}
export default App;
