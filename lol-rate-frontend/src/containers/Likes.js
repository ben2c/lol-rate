import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';

class Likes extends Component {

  render() {
    console.log("Favorite champions", this.props.user.champions)
    console.log("All champions", this.props.champions)


    return (

      <div className="Likes">

        <strong>{this.props.user.username}'s Favorite Champions</strong>
        <Card.Group itemsPerRow={3}>
          {this.props.user.champions.map((champion, id, users) => <ChampionCard users={users} key={id} champion={champion} />)}
        </Card.Group>
      </div>
    )
  }


}


const mapStateToProps = (state) => {
  return ({
    user: state.currentUser,
    champions: state.champions
  })
}

export default connect(mapStateToProps)(Likes);