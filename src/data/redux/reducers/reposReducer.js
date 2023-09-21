const SET_REPOS = "SET_REPOS";

const defaultState = {
  items: [],
  isFetching: false,
};

export default function reposReducer(state = defaultState, action) {
  switch (action) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
      };

    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
