import React, { Component } from 'react';
import './Champion.css';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';


class ChampionCard extends Component {
  render() {
    const { champion } = this.props;

    return (
    <Card>
      <div key={champion.id} >

        <Image className="ChampionImage" src={champion.url} alt={champion.name} />
          <Card.Content>
            <Card.Header>{champion.name}</Card.Header>
            <Card.Lane>{champion.lane}</Card.Lane>
          </Card.Content>

      </div>
    </Card>
    )
  }
}









export default ChampionCard;