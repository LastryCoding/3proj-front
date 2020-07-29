import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";

export default function Home() {
  const [User, setUser] = useState({});
  const { userData } = useContext(UserContext);
  useEffect(() => {
    if (userData.user !== undefined) {
      setUser({ ...userData.user });
    }
  }, [userData]);

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/logs")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div id="wrapper">
      <nav className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            3PROJ
          </a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fa fa-user fa-fw"></i>{" "}
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#">
                  <i className="fa fa-user fa-fw"></i> User Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-gear fa-fw"></i> Settings
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="/logout">
                  <i className="fa fa-sign-out fa-fw"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <a className="active-menu" href="/">
                <i className="fa fa-dashboard"></i> Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-header">Dashboard</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-green">
                <div className="panel-body">
                  <i className="fa fa-bar-chart-o fa-5x"></i>
                  <h3>457</h3>
                </div>
                <div className="panel-footer back-footer-green">
                  Daily Visits
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-blue">
                <div className="panel-body">
                  <i className="fas fa-chart-pie fa-5x"></i>
                  <h3>55 </h3>
                </div>
                <div className="panel-footer back-footer-blue">
                  analysis made
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-red">
                <div className="panel-body">
                  <i className="fab fa-servicestack fa-5x"></i>
                  <h3>23 </h3>
                </div>
                <div className="panel-footer back-footer-red">
                  Intrusions / attacks
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-brown">
                <div className="panel-body">
                  <i className="fas fa-laptop-code fa-5x"></i>
                  <h3>2 </h3>
                </div>
                <div className="panel-footer back-footer-brown">
                  devices needs review
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md12 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Detailed logs display</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>ReceivedAt</th>
                          <th>Priority</th>
                          <th>Message</th>
                          <th>SyslogTag</th>
                          <th>Email ID.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.map((element, i) => (
                          <tr key={i}>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>John15482</td>
                            <td>name@site.com</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
