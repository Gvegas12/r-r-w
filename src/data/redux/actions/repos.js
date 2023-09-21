import axios from "axios";
import { setIsFetching, setRepos } from "../reducers/reposReducer";

const searchQueryDefaultValue = "stars:%3E1";

export const getRepos = (searchQuery = searchQueryDefaultValue) => {
  if (!searchQuery) {
    searchQuery = searchQueryDefaultValue;
  }

  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`
    );
    dispatch(setRepos(data));
  };
};
