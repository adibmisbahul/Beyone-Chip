import { Component, createSignal, onMount } from "solid-js";

import Navbar  from "../navbar/navbar";
import "./history.css"
import { ColDef } from "ag-grid-community";
import cell from "../cell/cellrenderer";
import AgGridSolid, { AgGridSolidRef } from "ag-grid-solid";
import {createStore} from "solid-js/store"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getHistori } from "../service/service";




const History:Component = () =>{

  let gridRefTabel: AgGridSolidRef;

  const [tabel]: any = createStore([
	{cellRenderer:cell},
    { field: "tanggal", headerName: "tanggal" },
    { field: "transaksi", headerName: "transaksi" },
    { field: "assets", headerName: "assets" },
    { field: "amount", headerName: "amount" },
    { field: "pajak", headerName: "pajak" },
    { field: "total", headerName: "total" },
  ]);

  const [datatabel, setDatatabel]: any = createStore([

  ]);

  const defaultColDefTabel = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  onMount(() => {
    getHistori().then((data: any) => {
      setDatatabel(data);
      gridRefTabel.api.setRowData(data);
      gridRefTabel.api.sizeColumnsToFit();
    });
  });
	
	return (
    <>
    <Navbar/>
      <div class="back-his">
        <div class="wrap-history">
          <div class="text-his">
            <h1>History</h1>
          </div>
          <div class="ag-theme-alpine data-history">
            <AgGridSolid
              columnDefs={tabel}
              rowData={setDatatabel}
              defaultColDef={defaultColDefTabel}
              ref={gridRefTabel!}
            />
          </div>
        </div>
      </div>
    </>
  );
}


export default History