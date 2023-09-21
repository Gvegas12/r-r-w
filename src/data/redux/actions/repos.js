import axios from "axios";
import { setIsFetching, setRepos } from "../reducers/reposReducer";

const searchQueryDefaultValue = "stars:%3E1";

export const getRepos = (
  searchQuery = searchQueryDefaultValue,
  currentPage = 1,
  perPage = 10
) => {
  if (!searchQuery) {
    searchQuery = searchQueryDefaultValue;
  }

  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
    );
    dispatch(setRepos(data));
  };
};
