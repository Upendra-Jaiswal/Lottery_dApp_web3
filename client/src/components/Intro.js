import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
//import "./Intro";
const Intro = () => {
  return (
    <>
      <ul className="list-group" id="list">
        <div className="center">
          <li className="list-group-item" aria-disabled="true">
            <h1>You are</h1>
          </li>
          <li className="list-group-item">
            <Link to="/manager" className="text-decoration-none text">
              <button className="button1">Manager</button>
            </Link>

            <Link to="/players" className="text-decoration-none text">
              <button className="button1 player">Player</button>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Intro;

//0x1eC7E4210De1DF279Ee01Ab625c4bE39d4f88c58