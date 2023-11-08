import React from "react";
import './Assets/css/pol.css';
import {useState} from "react";
const Hellx = () => {
    const [data, setData] = useState(true)
    const fun = () => {
        setData(!data);
    }
    return (
        <>
            <div className={data ?"app a1":"app a2"}>
            <button onClick={fun} className={data ? "aq": "ap"}> {data ? 'show red' : 'Show green'}</button></div>
        </>
    )
}
export default Hellx;