import { Component } from "solid-js";
import { A } from "@solidjs/router";

import "./sidebar.css"

import logo from "../assets/image/beyone logo.png"
import dasboardicon from "../assets/image/dashboard.svg";
import walleticon from "../assets/image/wallet.svg";
import settingicon from "../assets/image/setting.svg";
import tradesicon from "../assets/image/chart.svg";
import logouticon from "../assets/image/logout.svg";
import transactionicon from "../assets/image/transaction.svg";
import closeIcon from "../assets/image/baseline-close.svg"




const Sidebar:Component = () => {
	return(
		<>
		  <div class="navbar">
        <div class="close-icon"><img src={closeIcon} alt="" /></div>
        <div class="logo-nav"> <img src={logo} alt="" /></div>
        <ul class="main-nav">
       
          <li>
            <img src={dasboardicon} alt=""/>
            <h1>
              <A href="/dashboard">Dashboard</A>
            </h1>
          </li>
          <li>
            <img src={walleticon} alt="" />
            <h1>My Wallet</h1>
          </li>
          <li>
            <img src={tradesicon} alt="" />
            <h1> <A href="/market-coin">Market</A></h1>
          </li>
          <li>
            <img src={transactionicon} alt="" />
            <h1> <A href="/history">History</A></h1>
          </li>
          <li>
            <img src={settingicon} alt="" />
            <h1>Setting</h1>
          </li>
          <li>
            <img src={logouticon} alt="" />
            <h1> <A href="/">Logout</A></h1>
          </li>
          <label></label>
        </ul>
      </div>
	  </>
	)
}

export default Sidebar