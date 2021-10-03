import { resetChampionForm } from "./championForm"
import { getChampionOwnerships } from "./championOwnerships"

//Actions Creators
export const setChampions = champions => {
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
  console.log("c");
  return dispatch => {
    dispatch({ type: "REQUESTING" })

    //fetch returns a promise we are waiting to resolve
    return (
      fetch("http://localhost:3000/api/v1/champions", {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        //when resolved, parse response data to JSON
        .then(r => r.json())
        //dispatch action to set champions and send to reducer to update state
        .then(champions => {
          dispatch(setChampions(champions));
          dispatch(getChampionOwnerships());
          dispatch({ type: "LOADED" });
        })
        //if Promise is rejected
        .catch(error => {
          console.log(error);
          dispatch({ type: "ERROR" });
        })
    )
  }
};

export const createChampion = champion => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/champions", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(champion)
    })
      .then(r => r.json())
      .then(champion => {
        dispatch(addChampion(champion));
        dispatch(resetChampionForm());
      });
  }
}