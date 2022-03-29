import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const error = {
  color: "red",
};

const renderContent = (apiData) => {
  if (apiData != null) {
    return apiData.data.map((data, i) => {
      return (
        <div className="card mb-3" key={i}>
          <div className="card-header">{data.name}</div>
          <div className="card-body">
            <p className="card-text">
              {data.description === null
                ? "No Description Available"
                : data.description}
            </p>
            <Link
              to={`/details:${data.name}`}
              className="btn btn-primary"
              state={{ data: data }}
            >
              Check out more info
            </Link>
          </div>
        </div>
      );
    });
  } else {
    return <h3>Api not called yet!</h3>;
  }
};

function App() {
  const [noInput, setNoInput] = useState(true);
  const [apiData, setData] = useState(null);
  const [input, setInput] = useState("");

  const populateData = async () => {
    if (input === "") {
      setNoInput(false);
      return;
    } else {
      setNoInput(true);
    }
    setData(await axios.get(`https://api.github.com/orgs/${input}/repos`));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 pt-5 offset-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                populateData();
              }}
            >
              <div className="form-group pb-3">
                <label htmlFor="company">
                  Search for company repos on GitHub!
                </label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="companyInput"
                  aria-describedby="company"
                  placeholder="Enter Company"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                {!noInput ? <p style={error}>you must enter a company</p> : ""}
              </div>
              <button type="submit" className="btn btn-primary">
                Click for api data
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-8 col-lg-12 pt-5">
            <div>{renderContent(apiData)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
