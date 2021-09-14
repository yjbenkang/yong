import React, { useState, useEffect } from "react";
import { getName } from "../api";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState();
    async function getHome() {
        try {
            const {data:{name}} = await getName();
            setName(name);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=> {
        getHome();
    }, []);
    return (
        <div>{name}</div>
    );
}