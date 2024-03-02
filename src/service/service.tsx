import { createSignal } from "solid-js";
import { apiUrl,apiDummy,api } from "../config/api";


export class DataPoiResponse {
    summary: any;
    poi: any;
    detail: any;
    sites : any;
}


const login = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}login`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body_params),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      });
    return data();
  };
  
const register = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}reg`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body_params),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      });
    return data();
  };

  const getHistori= async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}histori.json`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // console.log("cek data",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        console.log(error()); 
    });
    return data();
  }



  

export {
    login,
    register,
    getHistori

}