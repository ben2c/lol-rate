export default (state = [], action) => {

  switch (action.type) {
    case "GET_CHAMPION_OWNERSHIPS_SUCCESS":
      return action.championOwnerships

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      return state.concat(action.championOwnership);

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":
      return state.filter(to => to.id != action.championOwnership.id);


    default:
      return state
  }
}