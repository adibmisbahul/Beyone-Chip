import {
  Component,
  Match,
  Show,
  Suspense,
  Switch,
  createSignal,
  useTransition,
} from "solid-js";
import { start } from "repl";
import { A, useNavigate } from "@solidjs/router";

///css style login//////////
import "./login.css";

///////image import//////
import EmailIcon from "../assets/image/baseline-email.svg";
import Lock from "../assets/image/lock.svg";
import User from "../assets/image/user.svg";
import { login, register } from "../service/service";

const Login: Component = () => {
  ////tab login register////
  const navigate = useNavigate();
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index: any) => () => start(() => setTab(index));

  ////////////login/////////////
  const [authEmail, setauthEmail] = createSignal(true);
  const [emailLog, setEmailLog] = createSignal();
  const [passwordLog, setpasswordLog] = createSignal();

  //////////////////regex email log///////////////
  const EmailAuth = (evt: any) => {
    console.log("email", evt.currentTarget.value);
    const passwordRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log("parse", passwordRegex.test(evt.currentTarget.value));
    setauthEmail(passwordRegex.test(evt.currentTarget.value));
    setEmailLog(evt.currentTarget.value);
    if (evt.currentTarget.value === "") {
      // console.log("password1");
      setauthEmail(true);
    } else {
      // console.log("password2");
    }
  };

  const loginAction = async () => {
    // setlogKosong(false)
    // console.log('email ->', email())
    // console.log('password ->', password())
    // login({'email':email()})
    if (
      emailLog() !== undefined &&
      emailLog() !== "" &&
      passwordLog() !== undefined &&
      passwordLog() !== ""
    ) {
      login({ email: emailLog(), password: passwordLog() }).then(
        (data: any) => {
          console.log("akun ->", data);

          if (data.info == "Login successfully") {
            sessionStorage.setItem("token", data.token);
            localStorage.setItem("auth", JSON.stringify(data));
            console.log("GG -> ", localStorage.getItem("auth"));
            navigate("/dashboard", { replace: true });
          } else {
            alert("error");
          }
        }
      );
    } else {
      console.log("please insert data");
      // setlogKosong(true);
    }
  };

  ////////////////////register////////////////////

  const [username, setUsername] = createSignal();
  const [emailReg, setEmailReg] = createSignal();
  const [passwordReg, setPasswordReg] = createSignal();
  // const [password3, setPassword3] = createSignal();

  const [verifikasiPass, setVerifikasiPass] = createSignal(true);
  const [verifikasiPassl, setVerifikasiPassl] = createSignal(true);
  const [ulum1, setUlum1] = createSignal(true);

  const registerAuth = async () => {
    // setIsOpen(false);
    // setIsEror(false);
    // setIsKosong(false);

    // console.log('usename ->', username());
    // console.log('email ->', email1());
    // console.log('password ->', password1())
    // console.log('confirm password ->', password3());
    if (
      username() !== undefined && username() !== "" && emailReg() !== undefined && emailReg() !== "") {
      register({
        username: username(),
        email: emailReg(),
        password: passwordReg(),
        // confirm: password3(),
      }).then((data: any) => {
        console.log("akun anda", data);

        // if (passwordReg() == password3()) {
          // setIsOpen(true);
        // } else {
          // console.log('konfimasi kembali sandi anda')
        // }
      });
    } else {
      // setIsKosong(true);
    }
  };

  const regexemailregis = (evt: any) => {
    // console.log('testPassword', evt.currentTarget.value)
    const passwordRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // console.log("parse", passwordRegex.test(evt.currentTarget.value));
    setUlum1(passwordRegex.test(evt.currentTarget.value));
    setEmailReg(evt.currentTarget.value);
    if (evt.currentTarget.value === "") {
      console.log("password1");
      setUlum1(true);
    } else {
      console.log("password2");
    }

    // // console.log('regek email login', evt.currentTarget.value)
    // const passwordRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // // console.log('darel ganteng ',passwordRegex.test(evt.currentTarget.value));
    // setUlum(passwordRegex.test(evt.currentTarget.value))
  };

  const testPassword = (evt: any) => {
    // console.log('testPassword', evt.currentTarget.value)
    const passwordRegex: any =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    // console.log("parse", passwordRegex.test(evt.currentTarget.value));
    setVerifikasiPass(passwordRegex.test(evt.currentTarget.value));
    setPasswordReg(evt.currentTarget.value);
    if (evt.currentTarget.value === "") {
      // console.log('password1')
      setVerifikasiPass(true);
    } else {
      // console.log('password2')
    }
  };

  return (
    <>
      <div class="back-log">
        <div class="form">
          <div class="side-left">{/* <img src={animate} alt="" /> */}</div>
          <div class="side-right">
            <ul class="inline">
              <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                Login
              </li>
              <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                Register
              </li>
            </ul>
            <div class="tab">
              <Suspense fallback={<div class="loader">Loading...</div>}>
                <Switch>
                  <Match when={tab() === 0}>
                    <div class="input-log">
                      <h1>Welcome back</h1>
                      <div class="icon-email">
                        <img src={EmailIcon} alt="" />
                      </div>
                      <div class="icon-lock">
                        <img src={Lock} alt="" />
                      </div>

                      <input type="text"placeholder="Email" onkeyup={EmailAuth}/>
                      <Show when={!authEmail()}>
                        <p>Email is not valid</p>
                      </Show>
                      <input
                        type="password" placeholder="password" onchange={(a) => {setpasswordLog(a.currentTarget.value);}} />
                      <button onclick={loginAction}>
                        <A href="/dashboard">Login</A>
                      </button>
                    </div>
                  </Match>

                  <Match when={tab() === 1}>
                   
                    <div class="input-reg">
                    <h1>Money</h1>
                      <input
                        type="text"
                        placeholder="Username"
                        onchange={(a) => {
                          setUsername(a.currentTarget.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        onchange={(a) => {
                          setEmailReg(a.currentTarget.value);
                        }}
                        onkeyup={regexemailregis}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        onKeyUp={testPassword}
                        id="pain"
                      />
                      {/* <input
                        type="password"
                        placeholder="Confirm Password"
                        onchange={(a) => {
                          setPassword3(a.currentTarget.value);
                        }}
                        id="showpass"
                      /> */}
                      <button onclick={registerAuth}>Register</button>
                    </div>
                    {/* <label for="my_modal_7" class="btn psx-11" onClick={registerAuth}>Register</label> */}
                  </Match>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
