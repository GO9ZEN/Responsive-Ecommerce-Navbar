import React, { useEffect, useRef, useState } from 'react';
import CategoriesNavbar from './CategoriesNavbar/CategoriesNavbar';
import UserIconNavbar from './UserIconNavbar/UserIconNavbar';
import { ResponsiveSearch, SidebarMenuFoods, SidebarMenuSports, SidebarMenuGandF, SidebarMenu, SidebarNav, SidebarWrap } from './StyledComponentsNavbar';

import "./Navbar.css";

function Navbar() {
  const [responsiveSearch, setResponsiveSearch] = useState(false);
    const showResponsiveSearch = () => setResponsiveSearch(!responsiveSearch);
  
    const btnRefResponsiveSearch = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRefResponsiveSearch.current.contains(event.target)) {
          setResponsiveSearch(false);
        }
      });
    })
  
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    const btnRef = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRef.current.contains(event.target)) {
          setSidebar(false);
        }
      });
    })
  
    const [sidebarMenu, setSidebarMenu] = useState(false);
    const showSidebarMenu = () => setSidebarMenu(!sidebarMenu);
  
    const btnRefMenu = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRefMenu.current.contains(event.target)) {
          setSidebarMenu(false);
        }
      });
    })
    
    const [sidebarMenuGandF, setSidebarMenuGandF] = useState(false);
    const showSidebarMenuGandF = () => setSidebarMenuGandF(!sidebarMenuGandF);
  
    const btnRefMenuGandF = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRefMenuGandF.current.contains(event.target)) {
          setSidebarMenuGandF(false);
        }
      });
    })
  
    const [sidebarMenuSports, setSidebarMenuSports] = useState(false);
    const showSidebarMenuSports = () => setSidebarMenuSports(!sidebarMenuSports);
  
    const btnRefMenuSports = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRefMenuSports.current.contains(event.target)) {
          setSidebarMenuSports(false);
        }
      });
    })
  
    const [sidebarMenuFoods, setSidebarMenuFoods] = useState(false);
    const showSidebarMenuFoods = () => setSidebarMenuFoods(!sidebarMenuFoods);
  
    const btnRefMenuFoods = useRef();
  
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!btnRefMenuFoods.current.contains(event.target)) {
          setSidebarMenuFoods(false);
        }
      });
    })
  
    const closeSidebar = () => {
      if (sidebar && sidebarMenu) {showSidebar(); showSidebarMenu();} else {showSidebar();}
      if (sidebar && sidebarMenuGandF) {showSidebar(); showSidebarMenuGandF();} else {showSidebar();}
      if (sidebar && sidebarMenuSports) {showSidebar(); showSidebarMenuSports();} else {showSidebar();}
      if (sidebar && sidebarMenuFoods) {showSidebar(); showSidebarMenuFoods();} else {showSidebar();}
    }

  return (
    <>
      <div className="header">
        <div className="responsive-menu">
          <i class="fa fa-bars" aria-hidden="true" onClick={showSidebar}></i>
        </div>

        <div>
            <span>Navbar</span>
        </div>

        <div className="categories-all-parts">
          <span className="categories">Categories</span>

          <div className="categories-hover">
            <CategoriesNavbar />
          </div>
        </div>
        
        <div class="box">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="search" />
        </div>

        <div className="wishlist">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
        
        <div className="responsive-seach-cart">
          <div className="responsive-search">
            <i class="fa fa-search" aria-hidden="true" onClick={showResponsiveSearch}></i>
          </div>

          <div className="shopping-cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div className="shopping-cart-number">9+</div>
          </div>
        </div>
        
        <div className="notifications">
          <i class="fa fa-bell" aria-hidden="true"></i>
          <div className="notifications-dot"></div>
        </div>

        <div className="user-icon">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <div className="user-icon-dot"></div>

          <div className="user-icon-hover"> 
              <UserIconNavbar />
          </div>
        </div>
      </div>

      <div ref={btnRef}>
        <ResponsiveSearch responsiveSearch={responsiveSearch} ref={btnRefResponsiveSearch} className="responsive-search-box">
          <div class="box-responsive">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="search" />
          </div>

          <div className="closer-responsive-search" onClick={showResponsiveSearch}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </ResponsiveSearch>

        <SidebarNav className="slidebar-nav" sidebar={sidebar} >
          <SidebarWrap>
            <div className="menu-closer" onClick={closeSidebar}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>

            <div className="sidebar-menu">
              <div className="profile">

                <div className="profile-icon-menu" onClick={showSidebarMenu}>
                  <div>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    <div className="profile-icon-menu-dot"></div>
                  </div>
                  <span>GO9ZEN</span>
                  <div className="angle-right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="categories-menu">
                  <div className="topic-category">
                    <p>Categories</p>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuGandF}>
                    <span>Gym & Fitness</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuSports}>
                    <span>Sports</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuFoods}>
                    <span>Foods & Suppliments</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="categories-menu-more">
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

              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>

        <SidebarMenu sidebarMenu={sidebarMenu} ref={btnRefMenu} className="back-slider">
          <div className="sidebar-menu">
            <div onClick={showSidebarMenu} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu">
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

            <div className="categories-menu">
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

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Log out</p>
              </div>

              <div className="g-and-f">
                <span>Log out</span>
              </div>
            </div>
          </div>
        </SidebarMenu>
        
        <SidebarMenuGandF sidebarMenuGandF={sidebarMenuGandF} ref={btnRefMenuGandF} className="back-slider">
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuGandF} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Gym & Fitness</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Women's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Men's Wear</span>
              </div>
            </div>
          </div>
        </SidebarMenuGandF>

        <SidebarMenuSports sidebarMenuSports={sidebarMenuSports} ref={btnRefMenuSports} className="back-slider">
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuSports} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Sports</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Women's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Men's Wear</span>
              </div>
            </div>
          </div>
        </SidebarMenuSports>

        <SidebarMenuFoods sidebarMenuFoods={sidebarMenuFoods} ref={btnRefMenuFoods} className="back-slider">
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuFoods} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Foods & Suppliments</p>
              </div>

              <div className="g-and-f">
                <span>Suppliments</span>
              </div>

              <div className="g-and-f">
                <span>Protein Bars & Snacks</span>
              </div>

              <div className="g-and-f">
                <span>Other Meals</span>
              </div>
            </div>
          </div>
        </SidebarMenuFoods>
      </div>
    </>
  );
}

export default Navbar;