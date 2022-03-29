import React from "react";
import RepoInfo from "./components/RepoInfo";
import { useLocation } from "react-router-dom";

function Details(props) {
  const location = useLocation();
  const {
    state: { data },
  } = location;

  console.log(data);

  return (
    <RepoInfo
      name={data.name}
      avatar={data.owner.avatar_url}
      desc={data.description}
      watchers={data.watchers}
      issues={data.open_issues}
      forks={data.forks}
      license={data.license.key}
    />
  );
}

export default Details;
