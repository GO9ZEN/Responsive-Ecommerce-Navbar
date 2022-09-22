import React from 'react';

import "./UserIconNavbar.css";

function UserIconNavbar() {
  return (
    <div>
        <div className="sidebar-menu">
              <div className="profile">

                <div className="profile-icon-menu profile-icon-menu-navbar">
                  <div>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <span>GO9ZEN</span>
                </div>

                <div className="categories-menu categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Alerts</p>
                    </div>

                    <div className="g-and-f">
                        <span>Notifications</span>
                    </div>

                    <div className="g-and-f">
                        <span>Shopping Cart</span>
                    </div>

                    <div className="g-and-f">
                        <span>Wishlist</span>
                    </div>
                </div>

                <div className="categories-menu categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Account</p>
                    </div>

                    <div className="g-and-f">
                        <span>Profile</span>
                    </div>

                    <div className="g-and-f">
                        <span>Payment methods</span>
                    </div>

                    <div className="g-and-f">
                        <span>Purchase history</span>
                    </div>
                </div> 

                <div className="categories-menu categories-menu-navbar-user">
                  <div className="topic-category">
                    <p>More</p>
                  </div>

                  <div className="g-and-f">
                    <span>Invite friends</span>
                  </div>

                  <div className="g-and-f">
                    <span>Help</span>
                  </div>
                </div>

                <div className="categories-menu-more categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Log out</p>
                    </div>

                    <div className="g-and-f">
                        <span>Log out</span>
                    </div>
                </div>

              </div>
        </div>
    </div>
  );
}

export default UserIconNavbar;