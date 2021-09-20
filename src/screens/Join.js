import React, { useState, useEffect } from "react";
import Axios from "axios";


export default function Join() {
    const [status,setStatus] = useState("");
    const [disabled, setDisabled]=useState(false);
    const [values, setValues]=useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    // const user = {username: values.username, password: values.password }

    const handleSubmit = async (e) => {
        try{

        } catch (err) {

        }
    }

    return (
        <div>hi~</div>
    )
}