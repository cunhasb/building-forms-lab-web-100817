export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  console.log("manageBand", state, action);
  switch (action.type) {
    case "ADD_BAND":
      return Object.assign({}, state, {
        bands: state.bands.concat(action.band)
      });
    default:
      return state;
  }
}
