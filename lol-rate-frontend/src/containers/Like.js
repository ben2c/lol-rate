import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';

class Likes extends Component {

  render() {
    let newArray = this.props.champions.filter(champion => this.props.user.champions.map(t => t.id).includes(champion.id))


    return (

      <div className="Likes">

        <strong>{this.props.user.username}'s Favorite Champions</strong>
        <Card.Group itemsPerRow={3}>
          {newArray.map((champion, id) => <ChampionCard numUsers={champion.users.length} claimed={"true"} key={id} champion={champion} />)}
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

export default connect(mapStateToProps)(Like);