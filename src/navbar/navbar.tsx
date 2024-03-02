import { Component, Show, createSignal } from "solid-js";

import "./navbar.css";
import { A } from "@solidjs/router";
import Sidebar from "../sidebar/sidebar"

import menu from  "../assets/image/menu.svg"




const Navbar: Component = () => {

  const [sidebar, setSidebar] = createSignal(false)
  const [Open, setOpen] = createSignal(false)
  const toggle = ()  => setOpen(!Open())
  return (
    <>
      <div class="header">
        <div class="main-left">
          <Show
            when={Open()}
            fallback={<img onClick={toggle}  src={menu} class="menu-bar" alt="" />}>
              <label class="callsidebar" onClick={toggle}>
                <Sidebar/>
              </label>
          </Show>
          <input type="text" placeholder="search all asset" />
        </div>
        <div class="main-right">
          <h1>Hai adib misbahul</h1>
          <div class="avatar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
