import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'

class Champions extends Component {

  render() {
    let sorted = this.props.champions.sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
    return (
      <div className="Champions">
        <Divider />
        <Stats numChampions={this.props.champions.length} topThree={sorted.slice(0, 3)} />
        <strong>All Champions</strong>
        <div>{this.props.loadStatus}</div>
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
    loadStatus: state.loadStatus
  })
}

export default connect(mapStateToProps)(Champions);