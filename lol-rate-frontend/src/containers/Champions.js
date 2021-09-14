import React, { Component } from 'react';
import { getChampions } from '../actions/champions';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card } from 'semantic-ui-react';
import { getChampionOwnerships } from '../actions/championOwnerships';

class Champions extends Component {

  componentDidMount() {
    this.props.getChampions();
    this.props.getChampionOwnerships();
  }

  render() {

    return (
      <div className="Champions">
      <strong>All Champions</strong>
        <Card.Group itemsPerRow={3}>
          {this.props.champions.map((champion, id) => <ChampionCard claimed={champion.claimed} numUsers={champion.users.length} key={id} champion={champion} />)}
        </Card.Group>
      </div>
    )
  }



}

const mapStateToProps = (state) => {
  return ({
    champions: state.champions
  })
}

export default connect(mapStateToProps, { getChampions, getChampionOwnerships })(Champions);