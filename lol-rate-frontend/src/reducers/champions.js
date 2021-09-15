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
      let newChampions = action.user.champions
      newChampions.forEach(t => t.claimed = "true")



      let newA = newStateWithClaims.map(champion => newChampions.find(t => t.id === champion.id) || champion)


      return newA

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      let newState = [...state]
      newState.forEach(t => {
        if (t.id === action.champion.id) {
          t.users.push(action.user)
        }


      })
      return newState

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":

      let userRemoved = [...state]

      let newList = []
      let findChampion = userRemoved.find(t => t.id === action.champion.id)
      findChampion.claimed = "false"
      findChampion.users.forEach(user => {
        if (user.id !== action.user.id) {
          newList.push(user)
        }
      })


      findChampion.users = newList

      return userRemoved

    default:
      return state
  }
}