const initialState = {
  username: '',
  email: '',
  champions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return initialState
    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      //state is user
      let newState = Object.assign({}, state)
      newState.champions.push(action.champion)
      //action.champion, action.user is the champion with new owner
      return newState

    default:
      return state
  }
}