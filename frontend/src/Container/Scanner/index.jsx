import Scanner from "./Scanner";
import React, {useState} from 'react'

import "./Scanner.scss";

const Index = (props) => {
    const [error,setError] = useState("");

    const {history} = props;

    const handleScan = data => {
        if (data) {
            history.push(`restaurant/${data}`)
        }
      }

    const handleError = (err)=> {
        setError(`${err}`);
        console.log(err);
      }
    return (
            <Scanner handleError={handleError} handleScan={handleScan} error={error}/>
    )
}

export default Index
