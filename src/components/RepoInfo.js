import React from "react";

const logo = {
  width: "200px",
  height: "200px",
};

function RepoInfo({ name, avatar, watchers, issues, forks, desc, license }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-12 pt-5 text-center">
          <img style={logo} alt="avatar" src={avatar} />
          <h1>Name: {name}</h1>
          <h4>{desc}</h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Issues: {issues}</h4>
          <h4>Forks: {forks}</h4>
          <h4>License: {license}</h4>
        </div>
      </div>
    </div>
  );
}

export default RepoInfo;
