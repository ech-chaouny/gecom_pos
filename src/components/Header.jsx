import React from "react";

function Header() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-2">
                <div className="row">
                  <div className="col-md-10">
                    <div className="d-flex">
                      <i className="bx bx-user mt-2 ms-1"></i>
                      <select
                        id="selectTypeOpt"
                        className="form-select border-0 shadow-none"
                      >
                        <option defaultValue="bg-primary" selected>
                          User
                        </option>
                        <option defaultValue="bg-secondary">Secondary</option>
                        <option defaultValue="bg-success">Success</option>
                        <option defaultValue="bg-danger">Danger</option>
                        <option defaultValue="bg-warning">Warning</option>
                        <option defaultValue="bg-info">
                          Chowdhury pharmacy
                        </option>
                        <option defaultValue="bg-dark">Dark</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="user-btn position-absolute btn btn-primary"
                    >
                      <i className="bx bxs-user-plus"></i>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-2">
                <div className="d-flex">
                  <i className="bx bxs-home mt-2 ms-1"></i>
                  <select
                    id="selectTypeOpt"
                    className="form-select border-0 shadow-none"
                  >
                    <option defaultValue="bg-primary" selected>
                      Depot
                    </option>
                    <option defaultValue="bg-secondary">Secondary</option>
                    <option defaultValue="bg-success">Success</option>
                    <option defaultValue="bg-danger">Danger</option>
                    <option defaultValue="bg-warning">Warning</option>
                    <option defaultValue="bg-info">Info</option>
                    <option defaultValue="bg-dark">Dark</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card mb-2">
            <div className="d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0 mx-2"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Scanner/rechercher un produit par nom de code..."
                aria-label="Search..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex mb-2">
            <a href className="content-btn" style={{ background: "#FF679B" }}>
              <i className="bx bx-list-ul bx-md"></i>{" "}
            </a>
            <a
              href
              className="content-btn mx-3"
              style={{ background: "#0AC074" }}
            >
              <i className="bx bx-shopping-bag bx-md"></i>{" "}
            </a>
            <a href className="content-btn bg-info">
              <i className="bx bx-fullscreen bx-md"></i>{" "}
            </a>
            <a href className="content-btn mx-3 bg-primary">
              <i className="bx bxs-calculator bx-md"></i>{" "}
            </a>
            <a href className="content-btn bg-primary">
              <i className="bx bx-home-circle bx-md"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
