import React, { Component } from 'react';
import './Champion.css';
import '../App.css';
import { Card, Image } from 'semantic-ui-react';
import { claimChampion, unclaimChampion } from '../actions/championOwnerships';
import { connect } from 'react-redux';

class ChampionCard extends Component {

  constructor(props) {
    //super calls the constructor of parent class component
    super(props);
    //set initial state in constructor since it runs first
    this.state = { liked: false }

  }

  //alter state when the like button is clicked using setState
  clickHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }));
  }

  render() {

    const { champion, numUsers, claimChampion, unclaimChampion, championsReducer } = this.props;

    let buttonsVisible = 
    <div>
      {champion.claimed !== "true" ?
        <div className="claim-button" onClick={() => { claimChampion(champion, championsReducer.currentUser) }}><i className="plus icon plus-class" />Like</div> :
        <div className="unclaim-button" onClick={() => { unclaimChampion(championsReducer, champion, championsReducer.currentUser) }}><i className="minus icon minus-class" />Unlike</div>
      }   
    </div>

    return (

      <Card>
        <div key={champion.id} >

          <Card.Content>
            <Image className="ChampionImage" src={champion.url} alt={champion.name} />
            <Card.Header><strong>{champion.name}</strong></Card.Header>
            <Card.Description>{champion.description}</Card.Description>
            <div>
              {this.state.liked ?
                <button className="unlike-button" onClick={this.clickHandler}><i className="red heart icon" />Liked</button> :
                <button className="like-button" onClick={this.clickHandler}><i className="red heart outline icon" />Like</button>
              }
            </div>
          </Card.Content>
          <Card.Content extra>
            <i className='users icon user-class' /> {numUsers !== undefined ? champion.users.length : 0}
          </Card.Content>


          {championsReducer.currentUser.username ? buttonsVisible : ""}


        </div>
      </Card>

    )
  }
}

const mapStateToProps = state => {
  return {
    champions: state.champions,
    user: state.currentUser,
    championOwnerships: state.championOwnerships,
    championsReducer: state.championsReducer
  }
}
export default connect(mapStateToProps, { claimChampion, unclaimChampion })(ChampionCard);