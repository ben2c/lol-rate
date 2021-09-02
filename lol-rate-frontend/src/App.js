import './App.css';
import React from 'react';
import Login from './components/Login'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      <div className="App">
        Hello
        <Login />
      </div>
    );
  }

}

export default connect(null, { getCurrentUser })(App);
