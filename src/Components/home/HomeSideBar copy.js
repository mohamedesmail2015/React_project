import React from "react";
import "../../assets/css/SideBar.css";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function HomeSideBar_copy() {
  return (
    <Sidebar className="accordionMenuDiv">
      <Menu>
        <SubMenu
          style={{ backgroundColor: "#af1e4a", color: "#ffffff" }}
          label=" Living Room"
        >
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
        </SubMenu>
        <SubMenu
          style={{ backgroundColor: "#af1e4a", color: "#ffffff" }}
          label=" Living Room"
        >
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
        </SubMenu>
        <SubMenu
          style={{ backgroundColor: "#af1e4a", color: "#ffffff" }}
          label=" Living Room"
        >
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
        </SubMenu>
        <SubMenu
          style={{ backgroundColor: "#af1e4a", color: "#ffffff" }}
          label=" Living Room"
        >
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
        </SubMenu>
        <SubMenu
          style={{ backgroundColor: "#af1e4a", color: "#ffffff" }}
          label=" Living Room"
        >
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Sofa</MenuItem>
          <MenuItem component={<Link to="/subCategory" />}>Pie charts</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default HomeSideBar_copy;
