import { resetChampionForm } from "./championForm"
import { getChampionOwnerships } from "./championOwnerships"

export const setChampions = champions => {
  return {
    type: "GET_CHAMPIONS_SUCCESS",
    champions,

  }
}

export const fetchChampionsSuccess = champions => {
  return {
    type: "GET_ALL_CHAMPIONS_SUCCESS",
    champions
  };
};

export const addChampion = (champion) => {
  return {
    type: "CREATE_CHAMPION_SUCCESS",
    champion
  }
}

export const getChampions = () => {
  console.log("c")
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/champions",
      {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(r => r.json())
      .then(champions => {
        dispatch(setChampions(champions))
        dispatch(getChampionOwnerships());
      })
      .catch(error => dispatch({ action: 'ERROR' }))

  }

}

export const getAllChampions = () => {
  //thunk is function returned by another function
  //allows dispatch of actions inside the returned function
  return dispatch => {
    dispatch({ type: 'LOADING' })

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
          dispatch(fetchChampionsSuccess(champions));
          dispatch(getChampionOwnerships());

        })
        //if Promise is rejected
        .catch(error => {
          console.log("Error: ", error);
        })
    );
  };


};

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