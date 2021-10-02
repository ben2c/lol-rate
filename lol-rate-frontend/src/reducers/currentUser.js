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
      return {...state, champions: action.user.champions.map(t => {
          t.claimed = "true"
        return t
      })
      }

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      return { ...state, champions: state.champions.concat(action.champion) }

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":
      return { ...state, champions: action.user.champions.filter(t => t.id !== action.champion.id) }

    default:
      return state
  }
}