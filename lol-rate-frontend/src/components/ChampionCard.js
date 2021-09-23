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
            <Icon name='purple user' /> {this.props.champion.users !== undefined ? this.props.champion.users.length : 0}
          </Card.Content>
          
          {this.props.champion.claimed !== "true" ?
          <div className="ui inverted green button" onClick={() => { this.props.claimChampion(this.props.champion, this.props.user) }}><Icon name='green plus'/>Like this Champion</div> :
          <div className="ui inverted red button" onClick={() => { this.props.unclaimChampion(this.props.championOwnerships, this.props.champion, this.props.user) }}><Icon name='red minus'/>Unlike this Champion</div>}
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