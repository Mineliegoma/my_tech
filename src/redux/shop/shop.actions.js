
export let getItems = () => {
 return function (dispatch) {
  fetch('http://localhost:3000/api/v1/items')
   .then(res => res.json())
   .then(api => dispatch({ type: "GET_ITEMS", payload: api }))
   .catch(console.log)
 }
}