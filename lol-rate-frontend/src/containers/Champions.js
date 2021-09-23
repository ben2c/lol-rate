import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';
import Trending from '../components/Stats';
import { Divider } from 'semantic-ui-react'

class Champions extends Component {

  render() {
    let sorted = this.props.champions.sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
    return (
      <div className="Champions">
        <Divider />
        <Trending numChampions={this.props.champions.length} topThree={sorted.slice(0, 3)} />
        <strong>All Champions</strong>
        <Divider />
        <Card.Group itemsPerRow={3}>
          {this.props.champions.map((champion, id) => <ChampionCard claimed={champion.claimed} numUsers={champion.users.length} key={id} champion={champion} />)}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    champions: state.champions,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps)(Champions);