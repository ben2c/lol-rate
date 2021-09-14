import React, { Component } from 'react';
import './Champion.css';
import { Card, Icon, Image } from 'semantic-ui-react';
import { claimChampion } from '../actions/champions';
import { connect } from 'react-redux';
import { claimChampion, unclaimChampion } from '../actions/championOwnerships';

class ChampionCard extends Component {

  render() {
    return (
      <Card>
        <div key={this.props.champion.id} >

          <Card.Content>
            <Image className="ChampionImage" src={this.props.champion.url} alt={this.props.champion.name} />
            <Card.Header><strong>{this.props.champion.name}</strong></Card.Header>
            <Card.Lane>{this.props.champion.lane}</Card.Lane>
          </Card.Content>

          <Card.Content extra>
            <Icon name='user' /> {this.props.champion.users !== undefined ? this.props.champion.users.length : 0}
          </Card.Content>
          
          {this.props.claimed !== "true" ?
          <button onClick={() => { this.props.claimChampion(this.props.champion, this.props.user) }}>Like this Champion</button> : 
          <button onClick={() => { this.props.unclaimChampion(this.props.championOwnerships, this.props.champion, this.props.user) }}>Unlike this Champion</button>}
        </div>
      </Card>

    )
  }
}

const mapStateToProps = state => {
  return {
    champions: state.champions,
    user: state.currentUser,
    championOwnerships: state.championOwnerships
  }
}

export default connect(mapStateToProps, { claimChampion, unclaimChampion })(ChampionCard);