import s from './App.css';
// бібліотеки json //

import Container from './components/Container';

import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <Container></Container>
      </div>
    );
  }
}

export default App;
