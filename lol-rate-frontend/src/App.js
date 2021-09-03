import './App.css';
import React from 'react';
import Login from './components/Login'
import Logout from "./components/Logout"
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      //this.props.currentUser ? <Logout /> : <Login />
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
  }

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
