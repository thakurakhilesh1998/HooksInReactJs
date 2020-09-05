import React, { useState } from 'react';
import './index.css';

const App=()=>
{

    let date=new Date();
    let [count,upDateCount]=useState(0);
    let [cdate,getDate]=useState(date.toLocaleTimeString());
    const BtnClicked=()=>
        {
            count++;
        upDateCount(count);
        }

        const GetTime=()=>{
            let ndate=new Date();
            getDate(ndate.toLocaleTimeString());
        }
    return(
        <>
        <div id="main">
            <h1>{count}</h1>
            <button onClick={BtnClicked}>Click Me</button>
            <h1>{cdate}</h1>
            <button onClick={GetTime}>Get Time</button>
        </div>

        </>
    );
}

export {App}