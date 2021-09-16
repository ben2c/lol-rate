import React from 'react';

import { Icon } from 'semantic-ui-react';


const Stats = (props) => {


  let items = props.topThree.map(i => {
    return <div>{i.name} </div>
  })

  return (
    <div>
      <p><Icon name='blue gamepad' /><strong>Total champions</strong><div>{props.numChampions} </div></p>
      <Icon name='red hotjar' /><strong>Top champions</strong>
      {items}

    </div>
  );
}



export default Stats