import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Repo } from "./Repo/Repo";
import { getRepos } from "../../../data/redux/actions/repos";

import "./main.less";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { items: repos, isFetching } = useSelector((state) => state.repos);

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    dispatch(getRepos());
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = () => {
    dispatch(getRepos(search));
  }

  return (
    <div className="main">
      <div className="search">
        <input
          value={search}
          onChange={onChangeSearch}
          type="text"
          className="search-input"
        />
        <button onClick={onSearchHandler} className="search-btn">Search</button>
      </div>

      {isFetching ? (
        <div className="fetching"></div>
      ) : (
        repos.map((item) => <Repo key={item.id} repo={item} />)
      )}
    </div>
  );
};
