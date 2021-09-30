import React, { Component } from 'react';
import './Champion.css';
import '../App.css';
import { Card, Image } from 'semantic-ui-react';
import { claimChampion, unclaimChampion } from '../actions/championOwnerships';
import { connect } from 'react-redux';

class ChampionCard extends Component {

  render() {

    let buttonsVisible = 
    <div>
      {this.props.champion.claimed !== "true" ?
        <div className="claim-button" onClick={() => { this.props.claimChampion(this.props.champion, this.props.user) }}><i className="plus icon plus-class" />Like</div> :
        <div className="unclaim-button" onClick={() => { this.props.unclaimChampion(this.props.championOwnerships, this.props.champion, this.props.user) }}><i className="minus icon minus-class" />Unlike</div>
      }   
    </div>

    return (

      <Card>
        <div key={this.props.champion.id} >

          <Card.Content>
            <Image className="ChampionImage" src={this.props.champion.url} alt={this.props.champion.name} />
            <Card.Header><strong>{this.props.champion.name}</strong></Card.Header>
            <Card.Description>{this.props.champion.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <i className='users icon user-class' /> {this.props.numUsers !== undefined ? this.props.champion.users.length : 0}
          </Card.Content>


          {this.props.user.username ? buttonsVisible : ""}


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