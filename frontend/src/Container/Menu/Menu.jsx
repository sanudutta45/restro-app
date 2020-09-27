import React, { Fragment } from "react";

import "./Menu.scss";

const Menu = (props) => {
  const { menu, serverError } = props;

  return (
    <section id="menu">
      <div className="container-fluid">
        <div className="row">
          <div className="title_bar text-center">
            <h1>{menu.name || ""}</h1>
          </div>

          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active">
                
              </li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/pic1.jpg" alt="" />
              </div>
              <div className="carousel-item">
                <img src="/images/pic3.jpg" alt="" />
              </div>
              <div className="carousel-item">
                <img src="/images/pic3.jpg" alt="" />
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>

          <div
            className="accordion md-accordion"
            id="accordionEx"
            role="tablist"
            aria-multiselectable="true"
          >
            {menu &&
              menu.category &&
              menu.category.map((item, index) => (
                <Fragment>
                  {item.dishes.length > 0 && (
                    <div className="card">
                      <div
                        className="card-header p-3"
                        role="tab"
                        id={`heading${index}`}
                      >
                        <a
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                        >
                          <h5 className="mb-0 dish_category">
                            {item.title}
                            <i className="fas fa-angle-down rotate-icon ml-2"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id={`collapse${index}`}
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby={`heading${index}`}
                        data-parent="#accordionEx"
                      >
                        <div className="card-body">
                          <ol className="dishes">
                            {item.dishes.map((dish, index) => (
                              <li key={index}>
                                <div>
                                  {dish.type === "veg" ? (
                                    <img src="/images/veg.png" alt="veg" />
                                  ) : (
                                    <img
                                      src="/images/n-veg.png"
                                      alt="non-veg"
                                    />
                                  )}
                                </div>
                                <div className="dish_info ml-3">
                                  <div>{dish.name || ""}</div>
                                  <label htmlFor="price">
                                    Rs. {dish.price || 0}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
          </div>
          {serverError && (
            <div className="w-100 text-center text-danger">{serverError}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
