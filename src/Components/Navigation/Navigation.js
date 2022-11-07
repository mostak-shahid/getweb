import React, { Component } from "react";
import MenuItems from "../Navbar/MenuItems";

export default class Navigation extends Component {
  render() {
    const { title, menuOpen, menuOpenToggle, menuData } = this.props;
    const items = !Array.isArray(menuData) ? Object.values(menuData) : menuData;
    return (
      <>
        {title && (
          <h4 className={["mos-menu-title", this.props.titleCls].join(" ")}>
            {title}
          </h4>
        )}
        {items.length && (
          <ul className={[this.props.listCls, "mos-menu-list"].join(" ")}>
            {items.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  menuOpen={menuOpen}
                  menuOpenToggle={menuOpenToggle}
                />
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
