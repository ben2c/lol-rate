import React, { Component } from 'react';
import { getChampions } from '../actions/champions';
import { connect } from 'react-redux';

class Champions extends Component {

  componentDidMount() {
    this.props.getChampions();

  }

  render() {

    return (
      <div>Champions</div>

    )
  }



}

const mapStateToProps = (state) => {
  return ({
    champions: state.champions
  })
}

export default connect(mapStateToProps, { getChampions })(Champions);