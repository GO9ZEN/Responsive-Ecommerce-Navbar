import styled from 'styled-components';

export const ResponsiveSearch = styled.nav`
  background: #1b1b1b;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  top: ${({ responsiveSearch }) => (responsiveSearch ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
  gap: 15px;
}
`

export const SidebarMenuFoods = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuFoods }) => (sidebarMenuFoods ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
`

export const SidebarMenuSports = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuSports }) => (sidebarMenuSports ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
`

export const SidebarMenuGandF = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuGandF }) => (sidebarMenuGandF ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
`

export const SidebarMenu = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenu }) => (sidebarMenu ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
`


export const SidebarNav = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 9999;
`

export const SidebarWrap = styled.div`
  width: 100%;
`