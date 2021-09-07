import React, { Component } from 'react';
import './Champion.css';
import { Card, Icon, Image } from 'semantic-ui-react';


class ChampionCard extends Component {
  render() {
    const { champion } = this.props;

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
            <Icon name='user' /> {champion.users ? champion.users.length : 0}
          </Card.Content>

      </div>
    </Card>
    )
  }
}









export default ChampionCard;