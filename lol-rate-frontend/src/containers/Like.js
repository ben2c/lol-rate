import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';
import { getMyChampions } from '../actions/currentUser';

class Like extends Component {

  render() {
    let newArray = this.props.champions.filter(champion => this.props.user.champions.map(t => t.id).includes(champion.id))


    return (

      <div className="Like">

        <strong>{this.props.user.username}'s Favorite Champions</strong>
        <Card.Group itemsPerRow={3}>
          {newArray.map((champion, id) => <ChampionCard numUsers={champion.users.length} claimed={champion.claimed} key={id} champion={champion} />)}
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