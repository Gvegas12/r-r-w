import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../../data/redux/actions/repos";

export const MainPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector();

  React.useEffect(() => {
    dispatch(getRepos());
  }, []);

  return <div>MainPage</div>;
};
