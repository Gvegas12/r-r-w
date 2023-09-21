const defaultState = {
  items: [],
  isFetching: false,
};

export default function reposReducer(state = defaultState, action) {
  switch (action) {
    case "":
      break;

    default:
      return state;
  }
}
