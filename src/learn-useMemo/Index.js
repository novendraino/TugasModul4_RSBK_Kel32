

import React, { useMemo, useState } from 'react';
import "./Index.css";
import logo from "../logo.svg";

function Index() {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)
    const [showImage] = useState(true);

    const incrementNumber = () => setNumber(prev => prev + 1)
    const incrementCount = () => setCount(prev => prev + 1)

    const isNumberEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return number % 2 === 0
    }, [number])

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
            <div className="App">
                <button className="Button" onClick={incrementNumber}>number : {number}</button>
                <div>{isNumberEven ? "Genap" : "Ganjil"}</div>
                <button className="Button" onClick={incrementCount}>count: {count}</button>
            </div>
        </div>
    )
}

export default Index;