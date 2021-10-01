import React, { Component } from 'react';
import './Champion.css';
import '../App.css';
import { Card, Image } from 'semantic-ui-react';
import { claimChampion, unclaimChampion } from '../actions/championOwnerships';
import { connect } from 'react-redux';

class ChampionCard extends Component {

  constructor(props) {
    super(props);
    this.state = { liked: false }

  }

  clickHandler = () => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render() {

    const { champion, user, numUsers, championOwnerships, claimChampion, unclaimChampion } = this.props;

    let buttonsVisible = 
    <div>
      {champion.claimed !== "true" ?
        <div className="claim-button" onClick={() => { claimChampion(champion, user) }}><i className="plus icon plus-class" />Like</div> :
        <div className="unclaim-button" onClick={() => { unclaimChampion(championOwnerships, champion, user) }}><i className="minus icon minus-class" />Unlike</div>
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


          {user.username ? buttonsVisible : ""}


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