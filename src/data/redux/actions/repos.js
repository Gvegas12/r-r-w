import { $api } from "../../http";
import { setRepos } from "../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    const { data } = await $api.get(
      `/search/repositories?q=${searchQuery}&sort=stars`
    );

    dispatch(setRepos(data));
  };
};
