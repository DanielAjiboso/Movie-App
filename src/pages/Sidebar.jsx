import React from "react";

import { SidebarData } from "./SidebarData";

export default function Sidebar() {
  return (
    <div>
      <div>
        <p>MovieBox</p>
      </div>
      <div className="sidebar">
        <ul className="sidebar-list">
          {SidebarData.map((val, Key) => {
            return (
              <li
                className="row"
                key={Key}
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={(window.location.pathname = val.link)}
              >
                <div id="icon">{val.icon}</div>
                <div id="sidebar-title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
