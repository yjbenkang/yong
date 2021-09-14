import React, { useState, useEffect } from "react";

export default function Home() {
    const [name, setName] = useState();
    useEffect(()=> {
        setName("YongjinKang")
    })
    return (
        <div>{name}</div>
    );
}