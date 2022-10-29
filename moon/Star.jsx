import React, { useEffect, useState } from "react";
import { getRandomInt } from "../function/funcrions";
import "./Sky.css";

function Star(props) {
    const [isView, setIsView] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsView(true)
        }, getRandomInt(1000, 10000))
    }, [])

    return (
        isView &&
        <div
            className="Star__wrapper"
            style={{
                left: props.star.left,
                top: props.star.top,
            }}
        >

            <div className="Star"></div>
            </div>
            );
    }

            export default Star;
