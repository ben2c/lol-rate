export default (state = [], action) => {
  switch (action.type) {
    case "GET_CHAMPIONS_SUCCESS":
      return action.champions

    default:
      return state
  }
}