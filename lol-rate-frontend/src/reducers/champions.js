export default (state = [], action) => {
  switch (action.type) {
    case "GET_CHAMPIONS_SUCCESS":
      return action.champions
    case "CREATE_CHAMPION_SUCCESS":
      return state.concat(action.champion);

    default:
      return state
  }
}