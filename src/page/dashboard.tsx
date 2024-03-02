import { Component, For, Match, Suspense, Switch, createSignal, onMount, useTransition } from "solid-js";

import "./dasboard.css";
import Navbar1 from "../navbar/navbar"

//image//
import eth5 from "../assets/image/eth.jpg";
import btcc from "../assets/image/bitcoin.jpg"
import binance from "../assets/image/binance.jpg"
import axie from "../assets/image/axie infinity.jpg"
import Ape from "../assets/image/Ape.jpg"
import Solana from "../assets/image/solana icon.jpeg"
import poligon from "../assets/image/poligon.jpg"
import Fantom from "../assets/image/fantom.jpg"
import upicon from "../assets/image/up-solid.svg"
import downicon from "../assets/image/down-solid.svg" 



//////amchart//////
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";

import { useNavigate } from "@solidjs/router";



const Dahsboard: Component = () => {

  ////transition////
  const navigate = useNavigate();
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index: any) => () => start(() => setTab(index));

  const [coin, setCoin] = createSignal([
    { id: "2", image: (Ape), volume:"-10%" , icon:(downicon), name: "Ape",price:"$1000"},
    { id: "1", image: (eth5), volume:"+2%" , icon:(upicon), name: "Etherium", price:"$1000"},
    { id: "3", image: (poligon),  volume:"+5%" , icon:(upicon), name: "Poligon", price:"$1000"},
    { id: "4", image: (Fantom), volume:"+17%", icon:(upicon), name: "Fantom", price:"$1000"},
    { id: "5", image: (Solana), volume:"+7%", icon:(upicon), name: "Solana", price:"$900"},
  ]);

  const [token, setToken] =createSignal([
    {id:"1", image:(eth5), name:"Eth", total_assets:"$100,000", plus:"+$0.00" },
    {id:"2", image:(btcc), name:"Btc", total_assets:"$1,000,000", plus:"+$0.00" },
    {id:"3", image:(binance), name:"Bnc", total_assets:"$10,000,000", plus:"+$0.00" },
    {id:"4", image:(axie), name:"Axe", total_assets:"$1,000,000", plus:"+$0.00" },
  ])

  
  /////amchart//////////
  // chartdash
  onMount(() => {

    
/* Chart code */
// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
let root = am5.Root.new("chartdash");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
let chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    focusable: true,
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  })
);

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xAxis = chart.xAxes.push(
  am5xy.DateAxis.new(root, {
    baseInterval: { timeUnit: "day", count: 1 },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  })
);

let yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);

let color = root.interfaceColors.get("background");

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(
  am5xy.CandlestickSeries.new(root, {
    fill: color,
    stroke: color,
    name: "MDXI",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "close",
    openValueYField: "open",
    lowValueYField: "low",
    highValueYField: "high",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "open: {openValueY}\nlow: {lowValueY}\nhigh: {highValueY}\nclose: {valueY},\nmediana: {mediana}"
    })
  })
);

// mediana series
let medianaSeries = chart.series.push(
  am5xy.StepLineSeries.new(root, {
    stroke: root.interfaceColors.get("background"),
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "mediana",
    valueXField: "date",
    noRisers: true
  })
);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  xAxis: xAxis
}));
cursor.lineY.set("visible", false);

let data = [
  {
    date: "2023-08-01",
    open: 132.3,
    high: 136.96,
    low: 131.15,
    close: 136.49
  },
  {
    date: "2023-08-03",
    open: 135.26,
    high: 135.95,
    low: 131.5,
    close: 131.85
  },
  {
    date: "2023-08-04",
    open: 129.9,
    high: 133.27,
    low: 128.3,
    close: 132.25
  },
  {
    date: "2023-08-05",
    open: 132.94,
    high: 136.24,
    low: 132.63,
    close: 135.03
  },
  {
    date: "2023-08-06",
    open: 136.76,
    high: 137.86,
    low: 132.0,
    close: 134.01
  },
  {
    date: "2023-08-07",
    open: 131.11,
    high: 133.0,
    low: 125.09,
    close: 126.39
  },
  {
    date: "2023-08-08",
    open: 130.11,
    high: 133.0,
    low: 125.09,
    close: 127.39
  },
  {
    date: "2023-08-09",
    open: 125.11,
    high: 126.0,
    low: 121.09,
    close: 122.39
  },
  {
    date: "2023-08-10",
    open: 131.11,
    high: 133.0,
    low: 122.09,
    close: 124.39
  },

  {
    date: "2023-08-10",
    open: 132.3,
    high: 136.96,
    low: 131.15,
    close: 136.49
  },
  {
    date: "2023-08-11",
    open: 135.26,
    high: 135.95,
    low: 131.5,
    close: 131.85
  },
  {
    date: "2023-08-11",
    open: 129.9,
    high: 133.27,
    low: 128.3,
    close: 132.25
  },
  {
    date: "2023-08-12",
    open: 132.94,
    high: 136.24,
    low: 132.63,
    close: 135.03
  },
  {
    date: "2023-08-13",
    open: 136.76,
    high: 137.86,
    low: 132.0,
    close: 134.01
  },
  {
    date: "2023-08-14",
    open: 131.11,
    high: 133.0,
    low: 125.09,
    close: 126.39
  },
  {
    date: "2023-08-15",
    open: 130.11,
    high: 133.0,
    low: 125.09,
    close: 127.39
  },
  {
    date: "2023-08-16",
    open: 125.11,
    high: 126.0,
    low: 121.09,
    close: 122.39
  },
  {
    date: "2023-08-17",
    open: 131.11,
    high: 133.0,
    low: 122.09,
    close: 124.39
  }
];

// addMediana();

// function addMediana() {
//   for (var i = 0; i < data.length; i++) {
//     let dataItem = data[i];
//     dataItem.mediana =
//       Number(dataItem.low) + (Number(dataItem.high) - Number(dataItem.low)) / 2;
//   }
// }

series.data.processor = am5.DataProcessor.new(root, {
  dateFields: ["date"],
  dateFormat: "yyyy-MM-dd"
});

series.data.setAll(data);
medianaSeries.data.setAll(data);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000, 100);
medianaSeries.appear(1000, 100);
chart.appear(1000, 100);



  });

  return (
    <>
      <Navbar1 />
      <div class="wrapper">
        <h1 class="market">Market Trend</h1>
        <div class="shorcut-coin">
          <For each={coin()}>
            {(coin, i) => (
              <div class="main-sc">
                <div class="trend-coin" style={"display:flex"}>
                  <img src={coin.image} alt="" />
                  <p>{coin.volume}</p>
                  <img src={coin.icon} class="icon-mt" alt="" />
                </div>
                <h1>{coin.name}</h1>
                <h2>{coin.price}</h2>
              </div>
            )}
          </For>
          <div class="total-assets">
            <p>Total Assets</p>
            <h1>$ 20,124,927.00</h1>
          </div>
        </div>

        <div class="wrapper-chart">
          <div class="chart">
            <div class="main-chart" id="chartdash"></div>
          </div>
          <div class="asset-coin">
            <h1>Assets</h1>
            <For each={token()}>
              {(tkn, i) => (
                <div class="coin-assets">
                  <div class="coin-assets1">
                    <img src={tkn.image} alt="" />
                    <h1>{tkn.name}</h1>
                  </div>
                  <div class="coin-assets2">
                    <h1>{tkn.total_assets}</h1>
                  </div>
                  <div class="coin-assets3">
                    <h1>{tkn.plus}</h1>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dahsboard;
