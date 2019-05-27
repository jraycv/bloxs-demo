import * as React from "react";
import { render } from "react-dom";

import BloxsHeaderExitBtn from "./BloxsHeaderExitBtn";

import './style.scss'

function Root() {

  const [appState, setAppState] = React.useState("initial");

  function showConfirmBtn(){

     setAppState("confirm");

  }

  function subscribe(){

    window.open("https://css-brio.github.io","_self");

  }

  return (

<div>

    {/*<BloxsHeaderExitBtn />*/}

    <div className={`container guide display-${appState}`}>

      <div className="creativeArea">

        {/*Creative Focus Area*/}

      </div>

      <div className="subscriptionArea">

          {/*Subscription Area*/}

          <button className="btn primary initial" onClick={() => showConfirmBtn()}>Subscribe Now!</button>

          <button className="btn secondary cta" onClick={() => subscribe()}>Confirm</button>

      </div>

      <div className="freeArea">

           {/*Free Area*/}      
           
      </div>

      <div className="legalArea">

           {/*Legal Area*/}

          <div className="dummyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

            <div className="links">

            <a href="" target="_blank">Terms &amp; Conditions</a>

            <a href="" target="_blank">Privacy &amp; Policy</a>

            </div>

          </div>

      </div>

    </div>
</div>

  );
}

render(<Root />, document.getElementById("root"));
