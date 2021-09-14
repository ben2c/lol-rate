import { resetChampionForm } from "./championForm"
import { setChampionOwnership } from "./currentUser"

export const setChampions = champions => {
  console.log("setChampions=", champions)
  return {
    type: "GET_CHAMPIONS_SUCCESS",
    champions
  }
}

export const addChampion = champion => {
  return {
    type: "CREATE_CHAMPION_SUCCESS",
    champion
  }
}

export const getChampions = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/champions",
      {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(r => r.json())
      .then(champions => {
        if (champions.error) {
          alert(champions.error)
        } 
      }

      )
  }
}

export const createChampion = (champion) => {

  return dispatch => {

    return fetch("http://localhost:3000/api/v1/champions",
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(champion)

      })

      .then(r => r.json())
      .then(champion => {
        dispatch(addChampion(champion))
        dispatch(resetChampionForm())
      })

  }
}

export const claimChampion = (champion, user) => {
  const newData = {
    user_id: user.id,
    champion_id: champion.id
  }
  console.log("newData", newData)

  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/champion_ownerships/`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      })

      .then(r => r.json())
      .then(dispatch(setChampionOwnership(champion, user)))

  }
}