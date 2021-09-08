import React, { Component } from 'react';
import './Champion.css';
import { Card, Icon, Image } from 'semantic-ui-react';


class ChampionCard extends Component {
  render() {
    const { champion } = this.props;
    console.log("ToyCard toy", toy)

    let favs = []
    if (champion.users) {
      favs = champion.users.map(user => user.username)
      console.log("Favorites", favs)
    }

    return (
    <Card>
      <div key={champion.id} >

        <Image className="ChampionImage" src={champion.url} alt={champion.name} />
          <Card.Content>
            <Image className="ChampionImage" src={champion.url} alt={champion.name} />
            <Card.Header>{champion.name}</Card.Header>
            <Card.Lane>{champion.lane}</Card.Lane>
          </Card.Content>

          <Card.Content extra>
            <Icon name='user' /> {favs ? favs.length : 0}
          </Card.Content>

      </div>
    </Card>
    )
  }
}









export default ChampionCard;