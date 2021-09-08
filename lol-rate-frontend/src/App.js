import './App.css';
import React from 'react';
import Login from './components/Login'
import Logout from "./components/Logout"
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer';
import Champions from './container/Champions';
import ChampionForm from './components/ChampionForm';
import Likes from './containers/Likes';

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
        <Champions />
        <ChampionForm />
        <Likes />
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
