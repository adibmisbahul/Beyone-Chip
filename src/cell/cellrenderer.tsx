import { Component, For, createSignal } from "solid-js";
import { ICellRendererParams } from 'ag-grid-community';

import masuk from "../assets/image/masuk.svg"
import out from "../assets/image/log-out.svg"

import "./cellrenderer.css";

const CellRenderer: Component = () => {
  //data for each //




  return (
    <>
          <div class="cellrender">
            <img src={masuk} alt="" />
          </div>
       
    </>
  );
};

export default CellRenderer;


