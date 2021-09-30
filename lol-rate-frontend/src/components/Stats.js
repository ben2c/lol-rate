import React from 'react';

const Stats = (props) => {

  let items = props.topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>
  })

  return (
    <div>
      <i className='gamepad icon total-class' /><strong>Total champions</strong><p>{props.numChampions} </p>
      <i className='hotjar icon hot-class' /><strong>Top champions</strong>
      {items}

    </div>
  );
}



export default Stats