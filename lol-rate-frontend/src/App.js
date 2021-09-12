import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
//import MainContainer from './containers/MainContainer';
import Champions from './container/Champions';
import ChampionForm from './components/ChampionForm';
import Likes from './containers/Like';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import { Divider, Header } from 'semantic-ui-react'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header as='h1' textAlign='center'>
            League of Legends Champion Rating
          </Header>
          <Route exact path="/" component={Home} />
          
          <Champions />
          <ChampionForm />
          <Likes />
          <Route path='/signup' render={()=><Signup />} />
          <Route path="/champions" component={Champions} />
          {this.props.user ? <Route path="/Like" component={Like} /> : ""}
          <Divider hidden />
          <Footer />
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
