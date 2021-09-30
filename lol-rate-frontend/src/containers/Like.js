import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChampionCard from '../components/ChampionCard';
import { Card, Divider } from 'semantic-ui-react';

class Like extends Component {

  render() {
    let newArray = this.props.champions.filter(champion => this.props.user.champions.map(t => t.id).includes(champion.id))


    return (

      <div className="Like">
        <Divider hidden />
        {this.props.user.username ? <h3>{this.props.user.username}'s Champions</h3> : <strong>Log in or sign up</strong>}
        <Divider hidden />
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