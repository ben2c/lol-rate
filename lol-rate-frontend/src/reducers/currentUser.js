const initialState = {
  username: '',
  email: '',
  champions: [{ name: '', lane: '', url: '', users: [{}] }]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "SET_CURRENT_USER":
      return action.user

    case "CLEAR_CURRENT_USER":
      return initialState

    case "GET_MY_CHAMPIONS_SUCCESS":
      action.user.champions.map(t => t.claimed = "true")
      return action.user

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      //state is user
      let newState = Object.assign({}, state)
      newState.champions.push(action.champion)
      //action.champion, action.user is the champion with new owner
      return newState

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":
      let userRemovedChampion = Object.assign({}, state)
      let newList = []
      userRemovedChampion.champions.forEach(champion => {
        if (champion.id !== action.champion.id) {
          newList.push(champion)
          return champion
        } else {
          champion.claimed = "false"
        }
      })
      userRemovedChampion.champions = newList

      return userRemovedChampion
    default:
      return state
  }
}