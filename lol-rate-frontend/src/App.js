import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import Champions from './containers/Champions';
import ChampionForm from './components/ChampionForm';
import Like from './containers/Like';
import About from './components/About';
import Login from "./components/Login"
import Logout from "./components/Logout"
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import { Divider, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    //this.props.getAllChampions()

  }

  render() {
    let loggedIn = this.props.currentUser.username

    return (
      <div>

        {loggedIn ? <Logout /> : <div> <Login /> <Signup /> </div>}
        <Router>
          <div className="App">
            <NavBar />
            <Header as='h1' textAlign='center'>
              League of Legends Champion Rating
            </Header>
            {loggedIn ? <ChampionForm /> : ""}
            <Route exact path="/" component={Home} />
            {loggedIn ? <Route path="/signup" component={Signup} /> : ""}
            <Champions />
            <ChampionForm />
            <Like />
            <Route path='/signup' render={()=><Signup />} />
            <Route path="/champions" component={Champions} />
            {loggedIn ? <Route path="/Like" component={Like} /> : ""}
            {this.props.user ? <Route path="/Like" component={Like} /> : ""}
            <Divider hidden />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(App);
