import React, { useReducer, useState} from "react";
import "./Index.css";
import logo from "../logo.svg";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Index() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [showImage] = useState(true);

    return (
        <div className="Main">
            <div className="ViewImage1">
                    <img
                        className="App-logo"
                        style={{ display: showImage === true ? "flex" : "none" }}
                        src={logo}
                        alt="logo"
                    />
                </div>
            <div className="Text">Count = {count}</div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch("increment")}>
                        Increment
          </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch("decrement")}>
                        Decrement
          </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch("reset")}>
                        Reset
          </button>
                </div>
            </div>
            <h2>KELOMPOK 32</h2>
        </div>
    );
}

export default Index;
