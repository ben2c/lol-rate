const initialState = [
  {
    name: "",
    lane: "",
    users: [],
    claimed: 'false'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHAMPIONS_SUCCESS":
      return action.champions

    case "CREATE_CHAMPION_SUCCESS":
      return state.concat(action.champion);

    case "GET_MY_CHAMPIONS_SUCCESS":
      let newStateWithClaims = [...state]
      newStateWithClaims.forEach(t => t.claimed = "false")
      
      let userChampions = action.user.champions
      userChampions.forEach(t => t.claimed = "true")

      let newA = newStateWithClaims.map(champion => newChampions.find(t => t.id === champion.id) || champion)

      return newA

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      let newState = [...state]
      let newChampion = action.champion
      newChampion.claimed = "true"
      newChampion.users.push(action.user)
      return newState

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":
      let userRemoved = [...state]
      let findChampion = action.champion
      findChampion.claimed = "false"
      findChampion.users = findChampion.users.filter(u => u.id !== action.user.id)
      return userRemoved

    default:
      return state
  }
}