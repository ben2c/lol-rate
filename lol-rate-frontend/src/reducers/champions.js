export default (state = [], action) => {
  switch (action.type) {
    case "GET_CHAMPIONS_SUCCESS":
      return action.champions

    case "CREATE_CHAMPION_SUCCESS":
      return state.concat(action.champion);

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      let newState = [...state]
      newState.forEach(t => {
        if (t.id === action.champion.id) {
          t.users.push(action.user)
        }


      })
      return newState

    default:
      return state
  }
}