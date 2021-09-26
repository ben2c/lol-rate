import React from 'react';

import { Icon } from 'semantic-ui-react';


const Stats = (props) => {


  let items = props.topThree.map(i, key => {
    return <div>{i.name} </div>
  })

  return (
    <div>
      <p><i className='gamepad icon total-class' /><strong>Total champions</strong><p>{props.numChampions} </p></p>
      <i className='hotjar icon hot-class' /><strong>Top champions</strong>
      {items}

    </div>
  );
}



export default Stats