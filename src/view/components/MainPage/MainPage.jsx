import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Repo } from "./Repo/Repo";
import { getRepos } from "../../../data/redux/actions/repos";

import "./main.less";
import { setCurrentPage } from "../../../data/redux/reducers/reposReducer";
import { createPages } from "../../../data/utils/createPages";

export const MainPage = () => {
  const dispatch = useDispatch();
  const {
    items: repos,
    isFetching,
    currentPage,
    totalCount,
    perPage,
  } = useSelector((state) => state.repos);
  const [search, setSearch] = React.useState("");

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  React.useEffect(() => {
    dispatch(getRepos(search, currentPage, perPage));
  }, [currentPage]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(search));
  };

  const onClickPage = (e) => {
    dispatch(setCurrentPage(Number(e.target.innerHTML)));
  };

  return (
    <div className="main">
      <div className="search">
        <input
          value={search}
          onChange={onChangeSearch}
          type="text"
          className="search-input"
        />
        <button onClick={onSearchHandler} className="search-btn">
          Search
        </button>
      </div>

      {isFetching ? (
        <div className="fetching"></div>
      ) : (
        repos.map((item) => <Repo key={item.id} repo={item} />)
      )}

      <div className="pages">
        {pages.map((page, i) => (
          <span
            key={i}
            className={currentPage === page ? "current-page" : "page"}
            onClick={onClickPage}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};
