import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
//import MainContainer from './containers/MainContainer';
import Champions from './container/Champions';
import ChampionForm from './components/ChampionForm';
import Likes from './containers/Like';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Champions />
          <ChampionForm />
          <Likes />
          <Route path="/champions" component={Champions} />
          {this.props.user ? <Route path="/Like" component={Like} /> : ""}
        </div>
      </Router>
      
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
  }
}

export default connect(mapStateToProps)(App);
