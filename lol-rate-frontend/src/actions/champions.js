export const setChampions = champions => {
  console.log("setChampions=", champions)
  return {
    type: "GET_TOYS_SUCCESS",
    champions
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
          dispatch(setChampions(champions))
        }
      }


      )
  }
}