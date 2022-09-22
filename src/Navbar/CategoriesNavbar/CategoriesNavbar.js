import React from 'react';

import "./CategoriesNavbar.css";

function CategoriesNavbar() {
  return (
    <div>
        <div className="categories-menu-navbar">
            <div className="g-and-f-navbar-1">
              <span>Gym & Fitness</span>
              <div className="angle-right-category-navbar">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-1">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Gym & Fitness</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Accessories</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Women's Wear</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Men's Wear</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="g-and-f-navbar-2">
              <span>Sports</span>
              <div className="angle-right-category-navbar">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-2">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Sports</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Accessories</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Women's Wear</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Men's Wear</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="g-and-f-navbar-3">
              <span>Foods & Suppliments</span>
              <div className="angle-right-category-navbar">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-3">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Foods & Suppliments</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Suppliments</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Protein Bars & Snacks</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Other Meals</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default CategoriesNavbar;