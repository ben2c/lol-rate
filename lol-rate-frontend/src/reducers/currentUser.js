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
      return null
    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      //state is user
      console.log("state", state)
      action.user.champions.push(action.champion)
      //action.champion, action.user is the champion with new owner
      console.log("action.user", action.user)
      return action.user

    default:
      return state
  }
}