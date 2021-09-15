import { resetChampionForm } from "./championForm"
import { getChampionOwnerships } from "./championOwnerships"

export const setChampions = champions => {
  return {
    type: "GET_CHAMPIONS_SUCCESS",
    champions,

  }
}

export const addChampion = (champion) => {
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
        console.log("champions", champions)
        if (champions.error) {
          alert(champions.error)
        } else {
          //debugger
          dispatch(setChampions(champions))
          dispatch(getChampionOwnerships());
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

  }
}